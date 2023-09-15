import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле чекбокс
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @param {boolean} isActive Активность. По умолчанию не активно
 * @return {JSX.Element}
 */
export default function FieldCheckbox({
  defaultValue = '', name = '', title = '', isActive = false,
}) {
  const [active, setActive] = useState(isActive);

  return (
    <label className="field col --g-2">
      <div className="field--input">
        <input
          id={name}
          type="checkbox"
          className="input-checkbox hide"
          name={name}
          defaultValue={defaultValue}
          checked={active}
          onInput={() => setActive(!active)}
        />

        <div className="row --horizon --g-2">
          <span className="cell-auto">
            {active ? (
              <i className="fa-regular fa-square-check fa-lg" />
            ) : (
              <i className="fa-regular fa-square fa-lg" />
            )}
          </span>

          <span>{title}</span>
        </div>
      </div>
    </label>
  );
}

FieldCheckbox.defaultProps = {
  defaultValue: '',
  name: '',
  title: '',
  isActive: false,
};

FieldCheckbox.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  isActive: PropTypes.bool,
};
