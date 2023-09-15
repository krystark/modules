import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToPDF } from '../../app/main';

/**
 * Заголовок для страницы отчета
 * @module
 * @component
 * @param {String} metaTitle
 * @param {String} directionPdf
 * @param {Boolean} isPdf
 * @param {String} backLink
 * @return {JSX.Element}
 */
export default function PageHeader({
  metaTitle, directionPdf = '', isPdf = false, backLink, 
}) {
  return (
    <div>
      <div className="row --vertical-center">
        <div className="cell">
          <h1>{metaTitle}</h1>
        </div>

        {!!backLink && (
          <div className="cell-auto" data-html2canvas-ignore="true">
            <Link className="button --state-danger" to={backLink}>
              <i className="fas fa-chevron-left" />
            </Link>
          </div>
        )}

        {!!isPdf && (
          <div className="cell-auto" data-html2canvas-ignore="true">
            <ButtonToPDF direction={directionPdf} />
          </div>
        )}
      </div>
    </div>
  );
}

PageHeader.defaultProps = {
  directionPdf: '',
  isPdf: false,
  backLink: '',
};

PageHeader.propTypes = {
  metaTitle: PropTypes.string.isRequired,
  directionPdf: PropTypes.string,
  isPdf: PropTypes.bool,
  backLink: PropTypes.string,
};
