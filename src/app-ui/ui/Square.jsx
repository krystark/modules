import React from 'react';
import PropTypes from 'prop-types';
import Number from './Number.jsx';
import {Text, View} from "react-native";

/**
 * Форматировать площадь
 * @module
 * @component
 * @param {number=} value Значение
 * @param {number=} fSize Значение
 * @return {JSX.Element}
 */
export default function Square({ value = 0, fSize = 16, }) {
  return (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'flex-start'
        }}>
        <Text style={{fontSize: fSize}}>
            <Number value={value} />
            {' '}
            м
        </Text>
        <Text style={{fontSize: fSize - 5}}>
            2
        </Text>
    </View>
  );
}

Square.defaultProps = {
  value: 0,
  fSize: 16,
};

Square.propTypes = {
  value: PropTypes.number,
  fSize: PropTypes.number,
};
