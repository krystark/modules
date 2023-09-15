import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkPermission } from '../../app/main';
import { useCurrentUser } from '../../users/main';

/**
 * Блок ссылка
 * @module
 * @function
 * @param {Object} document Контент
 * @return {JSX.Element}
 */
export default function ServiceLink({ document = {} }) {
  const currentUser = useCurrentUser();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {checkPermission(currentUser, document.permissions) && (
        <Link
          to={document.url}
          className={`service-item box p ${document.cssClasses || 'font--black'}`}
          style={{ display: 'block' }}
        >
          <span className="col">
            <span>
              <span className="row --g-2 --horizon">
                <span className={`cell-auto ${document.cssClassesNotActive}`}>{document.icon}</span>
                <span>
                  {document.mark ? (
                    <strong>{document.title}</strong>
                  ) : (
                    <>{document.title}</>
                  )}
                </span>
              </span>
            </span>

            <span className="font--gray">{document.caption}</span>
          </span>
        </Link>
      )}
    </>
  );
}

ServiceLink.defaultProps = {
  document: {},
};

ServiceLink.propTypes = {
  document: PropTypes.shape(),
};
