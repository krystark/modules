import React, {useContext, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import { SetToastsContext, ToastsContext } from '../../app/ui/Provider.jsx';

/**
 * Форма
 * @module
 * @component
 * @param {JSX.Element|Array=} children Контент
 * @param {Function=} BeforePost Функция перед запросом
 * @param {Function=} setStatus Функция передачи статуса
 * @param {Function=} AfterPost Функция после запроса
 * @param {JSX.Element|Array=} afterSave Рендер элемента вместо формы после отправки
 * @param {string=} className Класс стилей
 * @param {string=} action Адрес запроса
 * @param {function=} onSubmit
 * @param reset
 * @return {JSX.Element}
 */
export default function Form({
  children,
  className = '',
  action = '',
  onSubmit = null,
  BeforePost = null,
  setStatus = null,
  AfterPost = null,
  reset = false,
  afterSave = null,
}) {
  const form = useRef(null);
  const [success, setSuccess] = useState(false);
  const toasts = useContext(ToastsContext);
  const setToasts = useContext(SetToastsContext);

  async function handleSubmit(event) {
    if (setStatus) {
      setStatus({ code: 'loader' });
    }

    if (BeforePost) {
      BeforePost();
    }

    event.preventDefault();

    if (typeof onSubmit === 'function') onSubmit();

    const formData = new FormData(form.current);

    const response = await fetch(form.current.action, {
      method: 'POST',
      body: formData,
    });

    // Отловить ошибку
    let result = { status: {} };
    if (response.ok) {
      result = await response.json();
    } else {
      result.status.code = response.status;
      result.status.message = response.statusText;
    }

    if (AfterPost) AfterPost();

    // Сбросить форму
    if (reset) form.current.reset();

    // Сменить статус
    if (setStatus) setStatus(result.status);

    // Добавить тост
    const resToasts = [...toasts];

    if (result.status) {
      if (result.status.code >= 500) {
        resToasts.push({
          id: Math.random(),
          title: 'Фатальная ошибка',
          type: 'danger',
          message: result.status.message,
        });
      } else if (result.status.code >= 400 && result.status.message) {
        resToasts.push({
          id: Math.random(),
          title: 'Внимание',
          type: 'warning',
          message: result.status.message,
        });
      } else if (result.status.code >= 200 && result.status.message) {
        resToasts.push({
          id: Math.random(),
          title: 'Статус',
          type: 'info',
          message: result.status.message,
        });

        setSuccess(true);
      }
    }

    if (resToasts) {
      setToasts(resToasts);
    }

    if (result.status.code >= 200) setSuccess(true);

    setTimeout(() => setToasts([]), 5000);
  }

  if (success && afterSave) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{afterSave}</>;
  }

  return (
    <form
      action={action}
      method="post"
      onSubmit={handleSubmit}
      ref={form}
      className={className}
    >
      {children}
    </form>
  );
}

Form.defaultProps = {
  className: '',
  action: '',
  onSubmit: null,
  setStatus: null,
  children: '',
  afterSave: '',
};

Form.propTypes = {
  className: PropTypes.string,
  action: PropTypes.string,
  onSubmit: PropTypes.func,
  setStatus: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  afterSave: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
