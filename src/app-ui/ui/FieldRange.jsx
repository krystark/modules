import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле диапозон
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {number} from Значение от
 * @param {number} to Значение до
 * @param {number} defaultValueFrom Установленное занчение от
 * @param {number} defaultValueTo Установленное занчение до
 * @param {number} step Шаг
 * @return {JSX.Element}
 */
export default function FieldRange({
  from = 0,
  to = 100,
  defaultValueFrom = 0,
  defaultValueTo = 100,
  step = 1,
  name = '',
  title = '',
}) {
  const input = useRef();
  const inputFrom = useRef();
  const inputTo = useRef();
  let range;

  useEffect(() => {
    if (input.current) {
      $(input.current).ionRangeSlider({
        skin: 'flat',
        onChange: (data) => {
          inputFrom.current.value = data.from;
          inputTo.current.value = data.to;
        },
      });

      range = $(input.current).data('ionRangeSlider');
    }
  });

  function onFrom() {
    let val = inputFrom.current.value;

    if (val < from) {
      val = from;
    } else if (val > to) {
      val = to;
    }

    range.update({
      from: val,
    });

    inputFrom.current.value = val;
  }

  function onTo() {
    let val = inputTo.current.value;

    if (val > to) {
      val = to;
    } else if (val < from) {
      val = from;
    }

    range.update({
      to: val,
    });

    inputTo.current.value = val;
  }

  return (
    <div className="field col --g-2 popup">
      {!!title && (
        <label htmlFor={name} className="field--label">
          {title}
        </label>
      )}

      <div className="field--input">
        <div className="row --g-2">
          <div className="cell">
            <input
              type="number"
              className="input-numeric"
              name={`${name}[from]`}
              defaultValue={defaultValueFrom}
              style={{ width: '71px' }}
              ref={inputFrom}
              onBlur={onFrom}
            />
          </div>

          <div className="cell">
            <input
              type="number"
              className="input-numeric"
              name={`${name}[to]`}
              defaultValue={defaultValueTo}
              style={{ width: '71px' }}
              ref={inputTo}
              onBlur={onTo}
            />
          </div>
        </div>
      </div>

      <div className="popup--box box p-2 --bottom">
        <div className="input-range">
          <input
            ref={input}
            type="text"
            name={`${name}[range]`}
            value=""
            data-type="double"
            data-min={from}
            data-max={to}
            data-step={step}
            data-from={defaultValueFrom}
            data-to={defaultValueTo}
            data-grid="true"
          />
        </div>
      </div>
    </div>
  );
}

FieldRange.defaultProps = {
  from: 0,
  to: 100,
  defaultValueFrom: 0,
  defaultValueTo: 100,
  step: 1,
  name: '',
  title: '',
};

FieldRange.propTypes = {
  from: PropTypes.number,
  to: PropTypes.number,
  defaultValueFrom: PropTypes.number,
  defaultValueTo: PropTypes.number,
  step: 1,
  name: PropTypes.string,
  title: PropTypes.string,
};
