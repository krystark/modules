import React, { useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

// Выводим типографию и все элементы управления
import {
    DateFormat,
    FAButton,
    Component,
    Content,
} from './src/app-ui/main';

import {
  miniButton,
  dangerButton,
  primaryButton,
  fontHeading,
} from './src/styles/main';

// Глобально назначаем русскую локаль для плагина времени DayJS
dayjs.locale('ru');

export default function App() {

    const [show, setShow] = useState(false);
    const {height, width, scale, fontScale} = useWindowDimensions();

    //Тестовые функции
    function toggleShow() {
        setShow(!show);
    }

    return (
        <Content>
            <Component style={{ backgroundColor: '#dddddd' }}>
                <Text style={fontHeading.superTitle}>Текст </Text>
            </Component>

            <Component>
                <FAButton text="Текст кнопки" iconLeft="github" appButtonContainer={{ ...dangerButton.appButtonContainer }} appButtonText={{ ...dangerButton.appButtonText, ...miniButton.appButtonText }} />
                <Text style={{ margin: 4 }} />
                <FAButton onPressFunc={() => toggleShow()} text="Текст кнопки" iconRight="gear" appButtonContainer={{ ...primaryButton.appButtonContainer }} appButtonText={{ ...primaryButton.appButtonText, ...miniButton.appButtonText }} />
            </Component>

            <Component>
                {!!show && ( <Text>Что то случилось! Ааааа!</Text> )}
            </Component>

            <Divider />

            <Component>
                <Text>Установленная дата: <DateFormat value='1997-10-20' /></Text>
                <Text>Сегодняшняя дата: <DateFormat /></Text>
            </Component>

            <Component>
                <Text style={fontHeading.superTitle}>Window Dimension Data</Text>
                <Text>Height: {height}</Text>
                <Text>Width: {width}</Text>
                <Text>Font scale: {fontScale}</Text>
                <Text>Pixel ratio: {scale}</Text>
            </Component>
        </Content>
  );
}

function Divider() {
    return (
        <View style={{ width: '100%', marginTop: 16, marginBottom: 16, borderBottomColor: '#dddddd', borderBottomWidth: 1, }} />
    )
}
