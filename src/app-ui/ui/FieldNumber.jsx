import React from 'react';
import PropTypes from 'prop-types';

/**
 * Поле число
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */
export default function FieldNumber({ defaultValue = '', name = '', title = '', step = 1 }) {
  return (
    <div className="field col --g-2">
      {!!title && (
        <label htmlFor={name} className="field--label">
          {title}
        </label>
      )}

      <div className="field--input">
        <input
          id={name}
          type="number"
          className="input-text"
          name={name}
          step={step}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}

FieldNumber.defaultProps = {
  defaultValue: '',
  name: '',
  title: '',
};

FieldNumber.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
};
