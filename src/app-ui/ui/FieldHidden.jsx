import React from 'react';
import PropTypes from 'prop-types';

/**
 * Скрытое поле
 * @module
 * @function
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number=} id ID поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */
export default function FieldHidden({ defaultValue = '', id = '', name = '' }) {
  return (
    <input type="hidden" name={name} id={id} value={defaultValue} key={defaultValue} />
  );
}

FieldHidden.defaultProps = {
  defaultValue: '',
  name: '',
  id: '',
};

FieldHidden.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  id: PropTypes.string,
};
