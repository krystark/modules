import { StyleSheet } from 'react-native';
import { cssColors, cssFontSize } from '../../globals';

/* =========== Кнопки ========== */
const mainButton = StyleSheet.create({
    appButtonContainer: {
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        border: 0,
        elevation: 3,
        display: 'inline-flex'
    },
    appButtonText: {
        fontSize: cssFontSize.btn.default,
    }
});

// Сво-ва кнопок - Цвет
const primaryButton = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: cssColors.primary,
        ...mainButton.appButtonContainer
    },
    appButtonText: {
        color: cssColors.white,
        ...mainButton.appButtonText
    }
});

const dangerButton = StyleSheet.create({
    appButtonContainer: {
        backgroundColor: cssColors.pink,
        ...mainButton.appButtonContainer
    },
    appButtonText: {
        color: cssColors.white,
        ...mainButton.appButtonText
    }
});

// Сво-ва кнопок - Размер
const miniButton = StyleSheet.create({
    appButtonContainer: {
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    appButtonText: {
        fontSize: cssFontSize.btn.mini,
    }
});

// Сво-ва кнопок - С иконкой
const iconLeftButton = StyleSheet.create({
    appButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export { primaryButton, dangerButton, miniButton, iconLeftButton };
