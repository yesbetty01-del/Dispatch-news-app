import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Greeting from '../../components/greeting';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import Chips from '../../components/chips';
import Card from '../../components/card'; 

const Index = () => {
    const { colors, spacing } = useTheme();
    const styles = createStyles(colors, spacing);
    const [searchText, setSearchText] = useState('');
    const DATA = [
        {
            id: '1',
            title: 'The Singularity is Nearer',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Greeting />
            <Header header={'Dispatch'} />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                    <SearchInput value={searchText} onChangeText={setSearchText} />
                    <View style={{marginHorizontal: -spacing.xl}}>
                        <Chips />
                    </View>
                    </>
                }
                renderItem={({item}) => <Card Title={item.title} />}
                showsVerticalScrollIndicator={false}
            />
            
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
