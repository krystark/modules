import React from 'react';
import PropTypes from 'prop-types';
import { Text, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import {
    iconLeftButton,
} from '../../styles/main';

/**
 * Форматировать площадь
 * @module
 * @component
 * @param {string=} iconRight Иконка
 * @param {string=} iconLeft Иконка
 * @param {string=} text Текст
 * @param {object=} appButtonContainer Стили кнопки
 * @param {object=} appButtonText Стили текста в кнопке
 * @param {Function=} onPressFunc Функция перед запросом
 * @return {JSX.Element}
 */
export default function FAButton({ iconRight = '', iconLeft = '', text = '', onPressFunc = null, appButtonContainer, appButtonText, }) {

    if (iconRight || iconLeft) {
        appButtonContainer = {...appButtonContainer, ...iconLeftButton.appButtonContainer}
    }

    return (
        <Pressable onPress={onPressFunc} style={appButtonContainer} title={text}>
            {!!iconLeft && ( <FontAwesome name={iconLeft} style={{ marginRight: 4 }} size={appButtonText.fontSize + 4} color={appButtonText.color} /> )}
            <Text style={appButtonText}>{text}</Text>
            {!!iconRight && ( <FontAwesome name={iconRight} style={{ marginLeft: 4 }} size={appButtonText.fontSize + 4} color={appButtonText.color} /> )}
        </Pressable>
    );
}

FAButton.defaultProps = {
    iconLeft: '',
    iconRight: '',
    text: '',
    onPressFunc: null,
    appButtonContainer : {},
    appButtonText: {}
};

FAButton.propTypes = {
    iconRight: PropTypes.string,
    iconLeft: PropTypes.string,
    text: PropTypes.string,
    onPressFunc: PropTypes.func,
    appButtonContainer: PropTypes.object,
    appButtonText: PropTypes.object,
};
