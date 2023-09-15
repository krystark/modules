import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Всплывающее окно
 * @module
 * @function
 * @param {JSX.Element|Array=} children Контент
 * @param {boolean} isActive Активность. По умолчанию не активно
 * @param {function} onClose Обратная функция при закрытие окна
 * @return {JSX.Element}
 */
export default function Dialog({
  children, isActive = false, onClose = () => {
  },
}) {
  const [active, setActive] = useState(isActive);

  function eventOnClose() {
    setActive(!active);

    onClose();
  }

  return (
    <div className={`dialog ${isActive ? '--active' : ''}`}>
      <div className="dialog--fade" onClick={eventOnClose} aria-hidden />

      <div className="dialog--window">
        <button
          type="button"
          className="dialog--close button --solid --state-danger font--white"
          onClick={eventOnClose}
        >
          <i className="fas fa-times" />
        </button>

        <div className="dialog--content">
          {children}
        </div>
      </div>
    </div>
  );
}

Dialog.defaultProps = {
  onClose: () => {
  },
  isActive: false,
  children: <></>,
};

Dialog.propTypes = {
  onClose: PropTypes.func,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
