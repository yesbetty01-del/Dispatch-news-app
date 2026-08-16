import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import Chips from '../../components/chips';
import ListView from '../../components/listView';
import { getItems } from '../../utils/storage';
import useBookmark from '../../store/useBookmark';

const Saved = () => {
    const { colors, spacing } = useTheme();
    const styles = createStyles(colors);
    const { bookmarks, setBookmarks, removeBookmark, addBookmark, loadBookmarks } = useBookmark();
    const articleLength = bookmarks.length;
    const [selectedCategory, setSelectedCategory] = useState("All");
    const cats = [... new Set(bookmarks.map((item) => item.categoryName))];
    const allCategories = [{_id: "all", categoryName: "All"}, ...cats.map((cat) => ({_id: cat, categoryName: cat}))];
    if(bookmarks.length === 0 && selectedCategory !== "All"){
        setSelectedCategory("All")
    }
    const filteredBookmarks = selectedCategory === "All" ? bookmarks : bookmarks.filter((item) => item.categoryName == selectedCategory);

    useEffect(() => {
        loadBookmarks();
}, [removeBookmark, addBookmark, loadBookmarks]);

    return (
        <SafeAreaView style={[styles.container, {paddingHorizontal: spacing.xl}]}>
            <Header header={'Saved'} />
            <Chips categories={allCategories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            {
                filteredBookmarks.length === 0 && (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{color: colors.inkSecondary}}> No bookmarks found </Text>
                    </View>
                )
            }
            <FlatList
                data={filteredBookmarks}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                    return (
                    <ListView
                        item={item}
                    />
                )}}
            />
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
