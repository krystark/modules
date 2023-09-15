import React from 'react';
import PropTypes from 'prop-types';

/**
 * Ячейка заголовка таблицы
 * @param {Object} props
 * @return {JSX.Element}
 */
export default function Th(props) {
  const { children } = props;

  return (
    <th {...props}>
      {children}
    </th>
  );
}

Th.defaultProps = {
  children: null,
};

Th.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
