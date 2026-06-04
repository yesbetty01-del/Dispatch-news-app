import React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Greeting from '../../components/greeting';
import Header from '../../components/header';

const Index = () => {
    const { colors } = useTheme();
    const styles = createStyles(colors);
    return (
        <SafeAreaView style={styles.container}>
            <Greeting />
            <Header header={'Dispatch'} />
        </SafeAreaView>
    );
}

const createStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flex: 1,
    }
})

export default Index;
