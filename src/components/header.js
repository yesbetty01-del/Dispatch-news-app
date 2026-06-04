import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Header = ({header}) => {
    const { colors, fSize, spacing } = useTheme();
    const styles = createStyles(colors, fSize, spacing);

    return (
        <Text style={styles.headerText}>
            {header}
        </Text>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    headerText: {
        color: colors.inkPrimary,
        fontSize: fSize.sectionTitle,
        fontFamily: 'Syne_800ExtraBold',
        marginLeft: spacing.lg
    }
});

export default Header;