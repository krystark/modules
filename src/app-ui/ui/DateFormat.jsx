import PropTypes from 'prop-types';
import dayjs from "dayjs";

/**
 * Форматировать дату
 * @module
 * @component
 * @param {String=} value Значение
 * @param {String=} format формат
 * @return {JSX.Element|String}
 * @example
 * <DateFormat value="2023-06-21" />
 */
export default function DateFormat({ format = 'DD MMM YYYY', value = '' }) {

  if (!value) {
    value = new Date();
  }

  return dayjs(value).format(format);
}

DateFormat.defaultProps = {
  value: '',
  format: 'DD MMM YYYY',
};

DateFormat.propTypes = {
  value: PropTypes.string,
  format: PropTypes.string,
};
