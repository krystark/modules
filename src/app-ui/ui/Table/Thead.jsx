import React from 'react';
import PropTypes from 'prop-types';

/**
 * Верхний колонтитул таблицы
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */
export default function Thead({ children }) {
  return (
    <thead>
      {children}
    </thead>
  );
}

Thead.defaultProps = {
  children: null,
};

Thead.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
