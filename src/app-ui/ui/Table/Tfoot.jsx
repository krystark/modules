import React from 'react';
import PropTypes from 'prop-types';

/**
 * Нижний колонтитул таблицы
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */
export default function Tfoot({ children }) {
  return (
    <tfoot>
      {children}
    </tfoot>
  );
}

Tfoot.defaultProps = {
  children: null,
};

Tfoot.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
