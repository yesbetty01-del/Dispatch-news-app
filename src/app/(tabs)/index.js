import { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Greeting from '../../components/greeting';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import Chips from '../../components/chips';
import Card from '../../components/card';
import ListView from '../../components/listView';
import { DATA } from '../../data/data';

const Index = () => {
    const { colors, spacing, fSize } = useTheme();
    const styles = createStyles(colors, spacing, fSize);
    const [searchText, setSearchText] = useState('');
    const ListHeader = () => {
        return (
            <View style={styles.headerText}>
                <Text style={styles.titleText}>LATEST DISPATCHES</Text>
                <View style={{ height: 1, width: '100%', backgroundColor: colors.border, marginVertical: 10 }} />
            </View>
        )
    }

    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
            <Greeting />
            <Header header={'Dispatch'} />
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <SearchInput value={searchText} onChangeText={setSearchText} />
                        <View style={{}}>
                            <Chips />
                            <Card Title={'The Singularity is Nearer'} />
                            <ListHeader />
                        </View>
                    </>
                }
                renderItem={({ item }) => (<ListView title={item.title} time={item.time} tagLabel={item.tagLabel} imageUrl={item.imageUrl} />)}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    );
}

const createStyles = (colors, spacing, fSize) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flex: 1,
        paddingHorizontal: spacing.xl,
        paddingVertical: spacing.lg
    },
    headerText: {
        flex: 1,
        marginTop: spacing.xxl
    },
    titleText: {
        fontSize: fSize.body,
        fontFamily: 'Syne_700Bold',
        color: colors.inkSecondary
    }
})

export default Index;
