import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле переключатель
 * @module
 * @function
 * @param {String|Number=} name Название поля на латинице для значения формы
 * @param {String|Number|Boolean=} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */
export default function FieldCheck({
  name = '',
  defaultValue = false,
}) {
  const [active, setActive] = useState(!!defaultValue);

  return (
    <>
      <input
        type="text"
        className="input-checkbox hide"
        name={name}
        value={active ? 1 : 0}
      />

      <button
        type="button"
        className={`button --solid ${active ? '--state-green-light' : '--state-gray-light'}`}
        style={{ width: '72px' }}
        onClick={() => setActive(!active)}
      >
        &nbsp;
      </button>
    </>
  );
}

FieldCheck.defaultProps = {
  defaultValue: false,
  name: '',
};

FieldCheck.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  name: PropTypes.string,
};
