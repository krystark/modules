import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon.jsx';

/**
 * Файл
 * @module
 * @component
 * @param {Object} doc Объект файла
 * @param {String} doc.path Путь
 * @param {String} doc.name Название
 * @param {String} doc.mimeType MIME тип файла (application/pdf)
 * @param {Boolean} doc.isNew Новинка
 * @return {JSX.Element}
 */
export default function File({ doc = {} }) {
  return (
    <div className="file-box box p-2">
      <div className="row --horizon">
        <div className="cell-auto">
          <Link to={doc.path} target="_blank">
            <FileIcon mimeType={doc.mimeType} />
          </Link>
        </div>

        <div className="cell-auto col --g-2">
          <Link to={doc.path} target="_blank" download={doc.fileName}>
            <div className="file-box--title">
              <strong>{doc.name}</strong>
              {' '}
              {!!doc.isNew && (
                <span className="button --x-small bg--yellow">new</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

File.propTypes = {
  doc: PropTypes.shape({
    path: PropTypes.string,
    name: PropTypes.string,
    mimeType: PropTypes.string,
    isNew: PropTypes.bool,
  }).isRequired,
};
