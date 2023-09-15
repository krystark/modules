import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Provider from './Table/Provider.jsx';

/**
 * Таблица
 * @param {Object} props
 * @param {Object} props.children
 * @param {Object} props.className
 * @return {JSX.Element}
 */
export default function Table(props) {
  const { children, className } = props;
  const [rowActive, setRowActive] = useState({});
  const [mainClass] = useState(className);
  let trs = [];

  useEffect(() => {
    if (mainClass.match(/--striped/)) {
      trs = $('.--striped tbody').children();

      if (trs && trs.length) {
        trs.each((index, element) => {
          if (!(index % 2)) {
            element.classList.add('--nth-child-odd');
          }
        });
      }
    }
  }, []);

  return (
    <div className="table--wrap">
      <Provider
        rowActive={rowActive}
        setRowActive={setRowActive}
        mainClass={mainClass}
      >
        <table {...props} className={`table ${className || ''} ${rowActive.current ? '--focus' : ''}`}>
          {children}
        </table>
      </Provider>
    </div>
  );
}

Table.defaultProps = {
  children: null,
  className: '',
};

Table.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  className: PropTypes.string,
};
