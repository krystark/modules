import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Сортировка узлов перетаскиванием. Перетаскиваемые объекты внутри `.js-sortable`.
 * @module
 * @component
 * @param {Object} props
 * @param {JSX.Element|Array=} props.children Контент
 * @param {boolean} props.isActive доступность перетаскивания
 * @param {boolean} props.action Адрес отправки формы
 * @return {JSX.Element}
 * @example
 * <Sortable action="">
 *   <div class="js-sortable">
 *     <div>1</div>
 *     <div>2</div>
 *   </div>
 * </Sortable>
 */
export default function Sortable(props) {
  const { children = null, isActive = false, action = '' } = props;
  const element = useRef(null);

  useEffect(() => {
    if (isActive) {
      const $element = $(element.current);
      const $sortable = $element.find('.js-sortable');

      $sortable.sortable({
        delay: 200,
        update: async (event, ui) => {
          const $parents = $(`[data-parent=${ui.item.data('id')}]`);
          if ($parents.length) ui.item.after($parents);

          const formData = new FormData();

          $element.find('input').each((index, input) => {
            formData.append(input.name, input.value);
          });

          const fetchResult = await fetch(action, {
            method: 'post',
            body: formData,
          });

          await fetchResult.json();
        },
      });

      $sortable.disableSelection();

      return () => {
        $sortable.sortable('destroy');
      };
    }
  });

  return (
    <div ref={element} {...props}>
      {children}
    </div>
  );
}

Sortable.defaultProps = {
  isActive: false,
  children: null,
};

Sortable.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
