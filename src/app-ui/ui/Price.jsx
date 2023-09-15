import React from 'react';
import PropTypes from 'prop-types';

/**
 * Форматировать цену
 * @module
 * @function
 * @param {number} value Значение
 * @return {JSX.Element}
 */
export default function Price({ value = 0 }) {
  const result = new Intl.NumberFormat().format(Math.ceil(parseFloat(value)));

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {value ? (
        <>
          {result}
          &nbsp;₽
        </>
      ) : (
        <>-</>
      )}
    </>
  );
}

Price.defaultProps = {
  value: 0,
};

Price.propTypes = {
  value: PropTypes.number,
};
