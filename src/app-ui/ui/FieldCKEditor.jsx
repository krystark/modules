import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

export default function FieldTextarea({
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
          className="hide"
          name={name}
          defaultValue={defaultValue || ''}
          ref={element}
        />

        <div className="typographic">
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: [
                'heading',
                '|', 'bold', 'italic', 'link',
                '|', 'bulletedList', 'numberedList',
                'blockQuote', 'insertTable',
                '|', 'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
              ],
            }}
            data={defaultValue}
            onInit={(editor) => {
              editor.editing.view.change((writer) => {
                writer.setStyle(
                  'height',
                  '200px',
                  editor.editing.view.doc.getRoot(),
                );
              });
            }}
            onChange={(event, editor) => {
              element.current.value = editor.getData();
            }}
          />
        </div>
      </div>
    </div>
  );
}

FieldTextarea.defaultProps = {
  defaultValue: '',
  id: '',
  name: '',
  title: '',
};

FieldTextarea.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
