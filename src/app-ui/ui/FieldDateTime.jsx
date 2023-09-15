import React from 'react';
import PropTypes from 'prop-types';

/**
 * Поле дата
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @param {function=} onChange Событие на изменение
 * @return {JSX.Element}
 */
export default function FieldDateTime({ defaultValue = '', onChange, name = '', title = '' }) {
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
          key={defaultValue}
          type="datetime-local"
          className="input-date"
          name={name}
          onChange={onChange}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}

FieldDateTime.defaultProps = {
  defaultValue: '',
  name: '',
  onChange: '',
  title: '',
};

FieldDateTime.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  onChange: PropTypes.func,
  title: PropTypes.string,
};
