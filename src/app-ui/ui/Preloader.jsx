import React from 'react';

/**
 * Предзагрузка
 * @module
 * @function
 * @return {JSX.Element}
 */
export default function Preloader() {
  return (
    <span>
      <i className="fa-duotone fa-spinner-third fa-spin" />
    </span>
  );
}
