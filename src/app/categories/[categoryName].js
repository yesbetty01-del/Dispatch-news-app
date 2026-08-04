import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import { useLocalSearchParams } from 'expo-router';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import Header from '../../components/header';
import ListView from '../../components/listView';

const CategoryName = () => {
    const { categoryName } = useLocalSearchParams();
    const { colors, spacing, fSize } = useTheme();
    const articles = useQuery(api.articles.getArticlesByCategory, { categoryName });
    if (!articles) {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: colors.surface, paddingHorizontal: spacing.xl}}
            >
                <Header header={categoryName} />
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: colors.inkSecondary, fontSize: fSize.body}}>
                        Loading articles...
                    </Text>
                </View>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: colors.surface, paddingHorizontal: spacing.xl}}>
            <Header header={categoryName} />
            <FlatList
                data={articles}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <ListView item={item} />
                )}
                ListEmptyComponent={() => (
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: colors.inkSecondary, fontSize: fSize.body}}>
                            No articles found in this category.
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default CategoryName;
