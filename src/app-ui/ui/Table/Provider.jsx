import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const RowActiveContext = createContext({});
// eslint-disable-next-line no-unused-vars
export const SetRowActiveContext = createContext((element) => {});

/**
 * Контекст
 * @component
 * @param {Object=} children
 * @param {Object=} rowActive
 * @param {Function=} setRowActive
 * @return {JSX.Element}
 */
export default function Provider({
  children,
  rowActive,
  setRowActive,
}) {
  return (
    <RowActiveContext.Provider value={rowActive}>
      <SetRowActiveContext.Provider value={setRowActive}>
        {children}
      </SetRowActiveContext.Provider>
    </RowActiveContext.Provider>
  );
}

Provider.defaultProps = {
  children: null,
  rowActive: {},
  setRowActive: null,
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  rowActive: PropTypes.shape(),
  setRowActive: PropTypes.func,
};
