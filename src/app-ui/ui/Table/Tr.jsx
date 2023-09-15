import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { RowActiveContext, SetRowActiveContext } from './Provider.jsx';

/**
 * Строка таблицы
 * @param {Object} props
 * @param {Object} props.children
 * @param {Object} props.className
 * @param {Object} props.onClick
 */
export default function Tr(props) {
  const tr = useRef(null);
  const { children, onClick, className } = props;
  const rowActive = useContext(RowActiveContext);
  const setRowActive = useContext(SetRowActiveContext);

  return (
    <tr
      {...props}
      className={`${className || ''} ${rowActive === tr ? '--focus' : ''}`}
      onClick={(event) => {
        if (typeof onClick === 'function') onClick();

        if (
          $(event.target).parents('tbody').length
          && !['input', 'button'].includes(event.target.tagName.toLowerCase())
        ) {
          setRowActive(rowActive !== tr ? tr : {});
        }
      }}
      ref={tr}
    >
      {children}
    </tr>
  );
}

Tr.defaultProps = {
  children: null,
  className: '',
  onClick: null,
};

Tr.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};
