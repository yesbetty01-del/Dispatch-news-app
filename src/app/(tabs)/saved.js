import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';

const Saved = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    return (
        <SafeAreaView style={styles.container}>
            <Header header={'Saved'} />
        </SafeAreaView>
    );
}

const createStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flex: 1
    }
})

export default Saved;
