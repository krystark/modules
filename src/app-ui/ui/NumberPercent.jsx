import React from 'react';
import PropTypes from 'prop-types';
import Number from './Number.jsx';

/**
 * Форматировать число с процентом
 * @module
 * @function
 * @param {number=} value Значение
 * @param {number=} maxFraction Округление до. Изначаьлно 2
 * @return {JSX.Element}
 */
export default function NumberPercent({ value = 0, maxFraction = 2 }) {
  return (
    <>
      <Number value={value} maxFraction={maxFraction} />
      %
    </>
    
  );
}

NumberPercent.defaultProps = {
  value: 0,
  maxFraction: 2,
};

NumberPercent.propTypes = {
  value: PropTypes.number,
  maxFraction: PropTypes.number,
};
