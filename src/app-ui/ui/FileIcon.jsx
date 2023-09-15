import React from 'react';
import PropTypes from 'prop-types';

/**
 * Иконка файла
 * @module
 * @component
 * @param {String} mimeType MIME тип файла (application/pdf)
 * @return {JSX.Element}
 */
export default function FileIcon({ mimeType = '' }) {
  if (mimeType === 'application/pdf') return <i className="fa-solid fa-file-pdf fa-xl font--pink" />;
  if (mimeType.indexOf('image/') !== -1) return <i className="fa-solid fa-image fa-xl font--gray" />;

  if (mimeType.indexOf('zip') !== -1 || mimeType.indexOf('rar') !== -1) {
    return <i className="fa-solid fa-file-zipper fa-xl" />;
  }

  if (mimeType.indexOf('excel') !== -1 || mimeType.indexOf('spreadsheet') !== -1) {
    return <i className="fa-solid fa-file-excel fa-xl font--green" />;
  }

  if (mimeType.indexOf('word') !== -1) {
    return <i className="fa-solid fa-file-word fa-xl font--blue" />;
  }

  return <i className="fa-solid fa-file fa-xl font--gray-light" />;
}

FileIcon.propTypes = {
  mimeType: PropTypes.string.isRequired,
};
