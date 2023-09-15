import React, { useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле текстовый блок
 * @module
 * @function
 * @param {string|number=} title Подпись
 * @param {string|number=} name Название поля на латинице для значения формы
 * @param {string|number=} id ID поля на латинице для значения формы
 * @param {string|number=} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */

export default function FieldTextareaSimple({
  defaultValue = '', id = '', name = '', title = '',
}) {
  const element = useRef(null);

  return (
    <div className="field col --g-2">
      {!!title && (
        <label htmlFor={name} className="field--label">
          {title}
        </label>
      )}

      <div className="field--input">
        <textarea
          id={id}
          className="textarea"
          name={name}
          defaultValue={defaultValue || ''}
          ref={element}
        />
      </div>
    </div>
  );
}

FieldTextareaSimple.defaultProps = {
  defaultValue: '',
  id: '',
  name: '',
  title: '',
};

FieldTextareaSimple.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
