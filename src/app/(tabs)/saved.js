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
    const articleLength = 2;
    const { bookmarks, setBookmarks, removeBookmark, addBookmark, loadBookmarks } = useBookmark();

    useEffect(() => {
        loadBookmarks();
}, [removeBookmark, addBookmark, loadBookmarks]);

    return (
        <SafeAreaView style={[styles.container, {paddingHorizontal: spacing.xl}]}>
            <Header header={'Saved'} />
            <Chips />
            {
                bookmarks.length === 0 && (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{color: colors.inkSecondary}}> No bookmarks found </Text>
                    </View>
                )
            }
            <FlatList
                data={bookmarks}
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
