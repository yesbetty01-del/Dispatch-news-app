import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import { useLocalSearchParams, router } from 'expo-router';
import useTheme from '../../store/useTheme';
import Icon from '../../components/icon';
import { Ionicons } from '@expo/vector-icons';
import useBookmark from '../../store/useBookmark';

const ArticleView = () => {
    const { colors, spacing, fSize } = useTheme();
    const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
    const styles = createStyles(colors, spacing, fSize);

    const { id } = useLocalSearchParams();
    const article = useQuery(api.articles.getArticleById, { id });

    const handleBookmarkPress = () => {
        if (isBookmarked(article?._id)) {
            removeBookmark(article?._id);
        } else {
            addBookmark(article);
        }
    };
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left','right']}>
            <View style={styles.header}>
                <Pressable
                    style={{
                        padding: 10,
                        borderRadius: 18,
                        backgroundColor: colors.surfaceDim
                    }}
                    onPress={() => router.back()}
                    >
                    <Icon name={"arrow-left"} />
                </Pressable>
                <Ionicons name={isBookmarked(article?._id) ? "bookmark" : "bookmark-outline"} size={20} color={isBookmarked(article?._id) ? colors.accentRed : colors.inkSecondary} onPress={handleBookmarkPress} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator= {false}
            >
                <Image
                    source={{ uri: article?.imageUrl }}
                    style={styles.headerImage}
                />
                <Text style={styles.category}>{article?.categoryName}</Text>
                <Text style={styles.title}>{article?.title}</Text>
                <Text style={styles.content}>{article?.content}</Text>
                <Text style={styles.content}>{article?.content}</Text>
                <Text style={styles.content}>{article?.content}</Text>
                <Text style={styles.content}>{article?.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const createStyles = (colors, spacing, fSize) => StyleSheet.create({
    container: {
        paddingHorizontal: spacing.lg,
        //paddingBottom: spacing.lg,
        flex: 1,
        backgroundColor: colors.surface
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: spacing.md
    },
    headerImage: {
        width: '100%',
        height: 200,
        overflow: 'hidden',
        borderRadius: 10
    },
    category: {
        fontFamily: 'Syne_400Regular',
        fontSize: fSize.caption,
        textTransform: 'uppercase',
        marginVertical: spacing.lg,
        color: colors.accentBlue
    },
    title: {
        fontFamily: 'Syne_700Bold',
        fontSize: fSize.cardTitle,
        marginBottom: spacing.xl,
        color: colors.inkPrimary,
        lineHeight: 28
    },
    content: {
        fontsize: fSize.body,
        color: colors.inkSecondary,
        lineHeight: 24,
        paddingBottom: spacing.xl
    }
})

export default ArticleView;
