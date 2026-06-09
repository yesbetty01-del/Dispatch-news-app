import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Greeting from '../../components/greeting';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';

const Index = () => {
    const { colors, spacing } = useTheme();
    const styles = createStyles(colors, spacing);
    const [searchText, setSearchText] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Greeting />
            <Header header={'Dispatch'} />
            {/* search input */}
            <SearchInput value={searchText} onChangeText={setSearchText} />
        </SafeAreaView>
    );
}

const createStyles = (colors, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flex: 1,
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg
    }
})

export default Index;
