import React from 'react';
import PropTypes from 'prop-types';

/**
 * Ячейка таблицы
 * @param {Object} props
 * @return {JSX.Element}
 */
export default function Td(props) {
  const { children } = props;

  return (
    <td {...props}>
      {children}
    </td>
  );
}

Td.defaultProps = {
  children: null,
};

Td.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
