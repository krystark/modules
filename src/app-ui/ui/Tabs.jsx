import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Закладки
 * @module
 * @function
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 * @example
 * <Tabs>
 *   <TabsItem title="Основные" isActive>{content}</TabsItem>
 *   <TabsItem title="Второстепенные">{secondContent}</TabsItem>
 * </Tabs>
 */
export default function Tabs({ children }) {
  const [active, setActive] = useState(null);
  const tabsWrapper = useRef();
  const links = [];

  function rec(elements) {
    elements.forEach((element) => {
      if (Array.isArray(element)) rec(element);
      else {
        links.push({
          id: Math.random(),
          title: element.props.title,
          isActive: element.props.isActive,
        }); 
      }
    });
  }

  function onClick(index) {
    setActive(index);

    $(tabsWrapper.current).children('.js-tab')
      .addClass('hide')
      .eq(index)
      .removeClass('hide');
  }

  if (Array.isArray(children)) rec(children);

  return (
    <div ref={tabsWrapper}>
      {links && (
        <div className="component" data-html2canvas-ignore="true">
          <div className="row --g-2 --h">
            {links.map((element, index) => (
              <button
                key={element.id}
                className={`button nobr ${(active === index || (active === null && element.isActive)) ? '--solid --state-primary font--white' : '--outline --state-gray-light'}`}
                type="button"
                onClick={() => onClick(index)}
              >
                {element.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {children}
    </div>
  );
}

Tabs.defaultProps = {
  children: null,
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
