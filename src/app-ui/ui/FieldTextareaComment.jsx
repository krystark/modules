import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

/**
 * Поле текстовый блок
 * @module
 * @function
 * @param {function=} onChangeHandle Функция оторая срабатывает на изменение или фокус интпута
 * @param {string|number=} setTemplate Функция сброса состояния "template"
 * @param {string|number=} template HTML блок для вставки
 * @param {string|number=} title Подпись
 * @param {string=} mode Режим работы bbcode/html
 * @param {string|number=} name Название поля на латинице для значения формы
 * @param {string|number=} id ID поля на латинице для значения формы
 * @param {string|number=} defaultValue Значение по умолчанию
 * @return {JSX.Element}
 */

export default function FieldTextareaComment({
  onChangeHandle = null, setTemplate, template, defaultValue = '', id = '', name = '', title = '',
}) {
  const element = useRef(null);

  if (template) {
    // element.insertHtml(template);
  }

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
                  editor.editing.view.document.getRoot(),
                );
              });
              editor.editing.view.focus();
            }}
            onChange={(event, editor) => {
              element.current.value = editor.getData();

              if (onChangeHandle) {
                onChangeHandle();
              }
            }}
            onFocus={(event, editor) => {
              if (template !== '') {

                const viewFragment = editor.data.processor.toView(template);
                const modelFragment = editor.data.toModel(viewFragment);

                editor.model.insertContent(modelFragment, editor.model.document.selection);

                setTemplate('');
              }

              if (onChangeHandle) {
                onChangeHandle();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

FieldTextareaComment.defaultProps = {
  defaultValue: '',
  mode: '',
  id: '',
  name: '',
  title: '',
  template: '',
};

FieldTextareaComment.propTypes = {
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  template: PropTypes.string,
  mode: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
