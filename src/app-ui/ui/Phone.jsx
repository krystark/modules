import React from 'react';
import PropTypes from 'prop-types';
import { formatPhone } from '../../app/main';

/**
 * Форматировать телефон
 * @module
 * @function
 * @param {string|number} value Значение
 * @return {JSX.Element}
 */
export default function Phone({ value = '' }) {
  const result = formatPhone(value);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {value && (
        <a href={`tel:${result}`}>{result}</a>
      )}
    </>
  );
}

Phone.defaultProps = {
  value: '',
};

Phone.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
