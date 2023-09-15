import React from 'react';
import PropTypes from 'prop-types';
import { cssSize } from '../../globals';
import {StyleSheet, Text, useWindowDimensions, View} from "react-native";

/**
 * Обертка контента
 * @module
 * @component
 * @param {JSX.Element|Array=} children Контент
 * @return {JSX.Element}
 */

export default function Content({ children = null }) {

  const {height, width, scale, fontScale} = useWindowDimensions();

  // Общий контейнер
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      maxWidth: width > 1200 ? cssSize.desktop : width,
      marginHorizontal: "auto",
      marginVertical: 0,
    },
    main: {
      width: '100%',
      margin: 0,
      padding: 0,
    }
  });

  return (
    <View style={styles.root}>
      <Text>тест</Text>
      <View style={styles.main}>
        {children}
      </View>
    </View>
  );
}

Content.defaultProps = {
  children: null,
};

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};
