import React from 'react';
import PropTypes from 'prop-types';

/**
 * Поле текстовая строка
 * @module
 * @function
 * @param {string|number=} title Подпись
 * @param {string=} type Тип
 * @param {string|number=} name Название поля на латинице для значения формы
 * @param {string|number=} defaultValue Значение по умолчанию
 * @param {function=} eventKeyDown Событие откустить кнопку при наборе текста
 * @param {function=} onChange Событие на изменение
 * @param {Object=} ref Событие откустить кнопку при наборе текста
 * @param {string=} subinput Текст-пояснение под инпутом
 * @return {JSX.Element}
 */
export default function FieldText({
  type = 'text',
  defaultValue,
  name,
  title,
  onChange,
  eventKeyDown,
  elementRef,
  required = false,
  subinput = null,
  onBlur = null,
}) {
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
          type={type}
          className="input-text"
          name={name}
          defaultValue={defaultValue}
          onKeyUp={eventKeyDown}
          onChange={onChange}
          ref={elementRef}
          required={required}
          onBlur={onBlur}
        />
      </div>

      {!!subinput && ( <small dangerouslySetInnerHTML={{ __html: subinput }} /> )}
    </div>
  );
}

FieldText.defaultProps = {
  type: 'text',
  defaultValue: '',
  name: '',
  title: '',
  onChange: '',
  eventKeyDown: '',
  elementRef: {},
  subinput: '',
};

FieldText.propTypes = {
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func,
  eventKeyDown: PropTypes.func,
  elementRef: PropTypes.shape(),
  subinput: PropTypes.string,
};
