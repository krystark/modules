import React from 'react';
import PropTypes from 'prop-types';

/**
 * Тело таблицы
 * @param {Object} props
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */
export default function Tbody({ children }) {
  return (
    <tbody>
      {children}
    </tbody>
  );
}

Tbody.defaultProps = {
  children: null,
};

Tbody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
