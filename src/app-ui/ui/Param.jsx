import React from 'react';
import PropTypes from 'prop-types';

/**
 * Форматировать число
 * @module
 * @function
 * @param {JSX.Element} icon Иконка
 * @param {string|number} title Заголовок
 * @param {string|number} value Значение
 * @return {JSX.Element}
 */
export default function Param({ icon = null, title = '', value = '' }) {
  return (
    <div className="cell">
      <div className="row --g-2">
        {!!icon && (
          <div className="cell-auto">
            {icon}
          </div>
        )}

        {!!title && (
          <div className={`cell-auto ${icon ? 'm-hide' : ''}`}>
            <strong>{title}</strong>
          </div>
        )}

        {!!value && (
          <div className="cell">{value}</div>
        )}
      </div>
    </div>
  );
}

Param.defaultProps = {
  icon: null,
  title: '',
  value: '',
};

Param.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
