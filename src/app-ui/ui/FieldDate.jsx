import React from 'react';
import PropTypes from 'prop-types';

/**
 * Поле дата
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @param {function} onChange Функция на изменение
 * @return {JSX.Element}
 */
export default function FieldDate({ defaultValue = '', name = '', title = '', onChange = null, }) {
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
          type="date"
          className="input-date"
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

FieldDate.defaultProps = {
  defaultValue: '',
  name: '',
  title: '',
  onChange: null,
};

FieldDate.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
};
