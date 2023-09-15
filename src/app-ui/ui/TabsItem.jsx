import React from 'react';
import PropTypes from 'prop-types';

/**
 * Закладки
 * @module
 * @function
 * @param {string|number} title Заголовок в закладке
 * @param {boolean=} isActive Активность
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */
export default function TabsItem({ title, isActive = false, children }) {
  return (
    <div className={`js-tab ${!isActive ? 'hide' : ''}`} title={title}>
      {children}
    </div>
  );
}

TabsItem.defaultProps = {
  isActive: false,
  children: null,
};

TabsItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
