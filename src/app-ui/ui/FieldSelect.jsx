import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Поле число
 * @module
 * @function
 * @param onChange
 * @param {string|number=} title Подпись
 * @param {string|number=} name Название поля на латинице для значения формы
 * @param {string|number=} defaultValue Значение по умолчанию
 * @param {bool=} multiple Множественный выбор
 * @param {array=} documents Список значений `{ id: 1, title: 'Вариант' }`
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */
export default function FieldSelect({
  defaultValue = '', onChange = '', name = '', title = '', documents = [], multiple = false, children,
}) {
  const select = useRef();
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (multiple) {
      const $select = $(select.current);

      $select.select2();
    }
  });

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {((documents && documents.length > 0) || !!children) && (
        <div className="field col --g-2">
          {!!title && (
            <label htmlFor={name} className="field--label">
              {title}
            </label>
          )}

          <div className="field--input">
            <select
              id={name}
              key={defaultValue}
              className="input-select"
              name={name}
              multiple={multiple}
              onChange={(e) => {
                setSelected(e.target.value);
                onChange(e.target.value).bind(select.current);
              }}
              ref={select}
              value={selected}
            >
              {children}

              {documents && documents.length > 0 && (
                <>
                  {documents.map((document) => (
                    <option
                      key={document.id}
                      value={document.id}
                    >
                      {document.title}
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
        </div>
      )}
    </>
  );
}

FieldSelect.defaultProps = {
  defaultValue: '',
  name: '',
  title: '',
  documents: [],
  multiple: false,
  children: null,
};

FieldSelect.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  documents: PropTypes.arrayOf(),
  multiple: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
