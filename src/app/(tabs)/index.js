import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import useTheme from '../../store/useTheme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Greeting from '../../components/greeting';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import Chips from '../../components/chips';
import Card from '../../components/card';
import ListView from '../../components/listView';
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Index = () => {
    const { colors, spacing, fSize } = useTheme();
    const styles = createStyles(colors, spacing, fSize);
    const [searchText, setSearchText] = useState('');
    const articles = useQuery(api.articles.getArticles);
    const categories = useQuery(api.categories.getAllCategories);
    const [ selectedCategory, setSelectedCategory ] = useState();
    const [ newCat, setNewCat ] = useState([]);
    const AllCategories = {
        _id: "all",
        categoryName: "All"
    }
    const filteredArticles = selectedCategory === "All" ? articles : articles?.filter((article) => article.categoryName === selectedCategory);
    const heroNews = articles?.[0];

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedCategory("All");
            const newCat = [AllCategories, ...categories];
            setNewCat(newCat);
        }
    }, [categories]);

    const ListHeader = () => {
        return (
            <View style={styles.headerText}>
                <Text style={styles.titleText}>LATEST DISPATCHES</Text>
                <View style={{ height: 1, width: '100%', backgroundColor: colors.border, marginVertical: 10 }} />
            </View>
        )
    }

    if(!articles || !categories) {
        return(
            <SafeAreaView style={styles.container} edge={["top", "left", "right"]} >
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
            <Greeting />
            <Header header={'Dispatch'} />
            <FlatList
                data={filteredArticles}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={
                    <>
                        <SearchInput value={searchText} onChangeText={setSearchText} placeHolder={'Search topics, authors, or keywords'} />
                        <View style={{}}>
                            <Chips categories={newCat} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                            <Card item={heroNews} />
                            <ListHeader />
                        </View>
                    </>
                }
                renderItem={({ item }) => (<ListView item={item} />)}
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
