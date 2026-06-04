import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { getGreeting } from '../utils/greeting';
import useTheme from '../store/useTheme';

const Greeting = () => {
    const { colors, fSize, spacing } = useTheme();

    const styles = createStyles(colors, fSize, spacing);

    return (
        <Text style={styles.greetingText}>
            {getGreeting()}
        </Text>
    );
}

const createStyles = (colors, fSize, spacing) => StyleSheet.create({
    greetingText: {
        color: colors.inkMuted,
        fontSize: fSize.secondary,
        marginLeft: spacing.lg
    }
});

export default Greeting;
