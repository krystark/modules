import React from 'react';
import PropTypes from 'prop-types';

/**
 * Форматировать число
 * @module
 * @function
 * @param {number=} value Значение
 * @param {number=} maxFraction Округление до. Изначаьлно 2
 * @return {JSX.Element}
 */
export default function Number({ value = 0, maxFraction = 2 }) {
  const result = new Intl
    .NumberFormat('ru-RU', { maximumFractionDigits: maxFraction })
    .format(value);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{result}</>
  );
}

Number.defaultProps = {
  value: 0,
  maxFraction: 2,
};

Number.propTypes = {
  value: PropTypes.number,
  maxFraction: PropTypes.number,
};
