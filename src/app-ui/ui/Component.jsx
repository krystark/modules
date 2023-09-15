import React from "react";
import {StyleSheet, View} from 'react-native';
import { cssColors, cssRadius } from '../../globals';
import PropTypes from "prop-types";

/**
 * Обертка контента
 * @module
 * @component
 * @param {JSX.Element|Array=} children Контент
 * @param {Number=} Padding Отступы внутри
 * @param {String=} Background Задний фон
 * @param {Number=} Radius Радиус
 * @param props
 * @return {JSX.Element}
 */


export default function Component({ children = null, Background = cssColors.white, Padding = 0, Radius = cssRadius.main, ...props }) {


    // Секционный контейнер
    const styles = StyleSheet.create({
        main: {
            marginBottom: 8,
            padding: Padding,
            borderRadius: Radius,
            marginHorizontal: 0,
            background: Background,
        }
    });

    return (
        <View style={{ ...styles.main, ...props.style }}>
            {children}
        </View>
    );
}

Component.defaultProps = {
    children: null,
    Padding: 0,
    Background: cssColors.white,
    Radius: cssRadius.main,
};

Component.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.array,
    ]),
    Padding: PropTypes.number,
    Background: PropTypes.string,
    Radius: PropTypes.number,
};
