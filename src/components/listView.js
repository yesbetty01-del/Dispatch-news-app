import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, Text, Alert } from 'react-native';
import useTheme from '../store/useTheme';
import Tag from './tag';
import Caption from './caption';
import { Ionicons } from '@expo/vector-icons';
import useBookmark from '../store/useBookmark';
import { getItems, setItems } from "../utils/storage";

const ListView = ({ imageUrl,tagLabel, title, time }) => {
    const { colors, fSize, spacing } = useTheme();
    const { addBookmark, removeBookmark } = useBookmark();
    const [ isBookmarked, setIsBookmarked ] = useState(false);

    useEffect(() => {
        const chechBookmark = async () => {
            const bookmarks = await getItems("bookmarks");
            if(bookmarks) {
                const parsedBookmarks = JSON.parse(bookmarks);
                const isBookmarked = parsedBookmarks.some(
                    (articleTitle) => articleTitle === title
                );
                setIsBookmarked(isBookmarked);
            }
            else {
                setIsBookmarked(false);
            }
        };
        chechBookmark();
    }, [title]);

    const handleBookmarkPress = () => {
        if (isBookmarked) {
            removeBookmark(title);
        } else {
            addBookmark(title);
        }
        setIsBookmarked(!isBookmarked);
    }

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                paddingVertical: spacing.md,
                paddingHorizontal: spacing.md,
                borderWidth: 1,
                borderColor: colors.border,
                backgroundColor: colors.containerLowest,
                marginTop: spacing.md,
                borderRadius: spacing.md
            }}
        >
            <Pressable
                onPress={() => {
                    Alert.alert('News Article', 'You clicked on the news article');
                }}
            >
                <Image
                    source={{uri: imageUrl}}
                    style={[styles.imageCard, { borderRadius: spacing.md}]}
                />
            </Pressable>
            
            <View style={styles.content}>
                <View style={{flexDirection: 'row'}}>
                    <Text
                        numberOfLines={2}
                        style={[styles.titleText,
                            {
                                color: colors.inkPrimary,
                                fontSize: fSize.body,
                            },
                        ]}
                    >
                        {title}
                    </Text>
                    <Ionicons name= { isBookmarked? 'bookmark' : 'bookmark-outline'} size={22} color={ isBookmarked? colors.accentRed : colors.inkSecondary} onPress={handleBookmarkPress} />
                </View>
                
                <View style={styles.footer}>
                    <Tag tagLabel={tagLabel} color={colors.inkSecondary} />
                    <View style={{width: 3, height: 3, borderRadius: 1.5, backgroundColor: 'gray'}} />
                    <Caption time={time} />                    
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageCard: {
        width: 80,
        height: 80
    },
    titleText: {
        marginBottom: 10,
        fontFamily: 'Syne_500Medium',
        flex: 1,
    },
    content: {
        flex: 1,
        paddingLeft: 10,
    },
    footer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }
})

export default ListView;
