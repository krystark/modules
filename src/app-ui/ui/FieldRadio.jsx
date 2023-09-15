import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле радио-кнопки
 * @module
 * @function
 * @param {array} variants Подпись
 * @param {string} mode row/col
 * @param {string|number} name Название поля на латинице для значения формы
 * @return {JSX.Element}
 */
export default function FieldRadio({
  variants = {}, name= '', mode = '', required = false,
}) {
  const [radio, setRadio] = useState();

  return (
    <div className={`radio-labels ${mode}`}>
      {variants.map((variant, index) => (
        <InputRadio radio={radio} setRadio={setRadio} title={variant.NAME} id={`${name}-${index}`} name={name} defaultValue={variant.ID} required={required} />
      ))}
    </div>
  );
}

function InputRadio({
  defaultValue = '', name, title, id = `${name}-1`, radio, setRadio, required,
}) {
  function chengeValue() {
    setRadio(id);
  }

  return (
    <label className="field col --g-2">
      {!!title && (
        <div htmlFor={name} className="field--label">
          &nbsp;
        </div>
      )}

      <div className="field--input">
        <input
          id={id}
          type="radio"
          className="input-radio"
          name={name}
          defaultValue={defaultValue}
          checked={radio === id}
          required={required}
          onChange={chengeValue}
        />

        <div className="row --horizon --g-2">
          <div className="cell-auto">
            {radio === id ? (
              <i className="fa-regular fa-circle-dot fa-lg" />
            ) : (
              <i className="fa-regular fa-circle fa-lg" />
            )}
          </div>

          {!!title && (
            <div className="cell-auto">{title}</div>
          )}
        </div>
      </div>
    </label>
  );
}

InputRadio.defaultProps = {
  defaultValue: '',
  name: '',
};

InputRadio.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
};
