import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputColor from 'react-input-color';

/**
 * Поле текстовая строка
 * @module
 * @function
 * @param {string|number=} title Подпись
 * @param {string=} type Тип
 * @param {string|number=} name Название поля на латинице для значения формы
 * @param {string|number=} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */
export default function FieldColor({
  defaultValue = '#4E8CFC', name, title, elementRef,
}) {
  const [initial, setInitial] = useState(defaultValue);
  const [color, setColor] = useState({});

  return (
    <div className="field col --g-2">
      {!!title && (
        <label htmlFor={name} className="field--label">
          {title}
        </label>
      )}

      <div className="field--input">
        <input
          type="color"
          id={name}
          name={name}
          ref={elementRef}
          value={color.hex}
          style={{ width: '50px' }}
          onChange={(e) => setInitial(e.target.value)}
        />
        <br />
        <InputColor style={{ display: 'none' }} initialValue={initial} onChange={setColor} />
      </div>
    </div>
  );
}

FieldColor.defaultProps = {
  defaultValue: '#4E8CFC',
  name: '',
  title: '',
  elementRef: {},
};

FieldColor.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  elementRef: PropTypes.shape(),
};
