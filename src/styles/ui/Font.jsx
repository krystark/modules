import { StyleSheet } from 'react-native';
import { cssFontSize, cssColors } from '../../globals';

/* =========== Кнопки ========== */
const fontHeading = StyleSheet.create({
    superTitle: {
        marginBottom: 16,
        paddingBottom: 8,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'flex-start',
        fontSize: cssFontSize.large,
        borderBottomColor: cssColors.lightGray,
        borderBottomWidth: 1,
        fontWeight: "700",
    },
    h2: {
        fontSize: cssFontSize.large,
        fontWeight: "700",
    },
    h3: {
        fontSize: cssFontSize.title,
        fontWeight: "500",
    }
});

export { fontHeading };
