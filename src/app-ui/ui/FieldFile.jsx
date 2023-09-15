import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FieldCheckbox from './FieldCheckbox.jsx';

/**
 * Поле файл
 * @module
 * @function
 * @param {string|number} title Подпись
 * @param {string|number} name Название поля на латинице для значения формы
 * @param {string|number} defaultValue Значение по умолчанию
 * @param {boolean} multiple Мультифайловое
 * @return {JSX.Element}
 */
export default function FieldFile({
  defaultValue = '', name = '', title = '', multiple = false, 
}) {
  return (
    <div className="field col --g-2">
      {!!title && (
        <label htmlFor={name} className="field--label">
          {title}
        </label>
      )}

      <div className="field--input">
        <input id={name} type="file" name={name} multiple={multiple} />
      </div>

      {defaultValue && (
        <div className="field--message">
          <div className="row --g-2">
            <div className="cell-auto" data-title="Удалить">
              <FieldCheckbox name={`remove_${name}`} defaultValue={defaultValue} />
            </div>

            <div className="cell-auto">
              <Link to={defaultValue} target="_blank">{defaultValue}</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

FieldFile.defaultProps = {
  defaultValue: '',
  name: '',
  title: '',
  multiple: false,
};

FieldFile.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  multiple: PropTypes.bool,
};
