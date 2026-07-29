import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, Text, Alert } from 'react-native';
import useTheme from '../store/useTheme';
import Tag from './tag';
import Caption from './caption';
import { Ionicons } from '@expo/vector-icons';
import useBookmark from '../store/useBookmark';
import { router } from 'expo-router';

const ListView = ({ item }) => {
    const { colors, fSize, spacing } = useTheme();
    const { addBookmark, removeBookmark, isBookmarked } = useBookmark();
    const [ bookmarked, setBookmarked ] = useState(false);

    const handleBookmarkPress = () => {
        if (isBookmarked(item._id)) {
            removeBookmark(item._id);
            setBookmarked(false);
        } else {
            addBookmark(item);
            setBookmarked(true);
        }
    };

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
                onPress={() => router.push(`article/${item._id}`)}
            >
                <Image
                    source={{uri: item.imageUrl}}
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
                        {item.title}
                    </Text>
                    <Ionicons name= { isBookmarked(item._id)? 'bookmark' : 'bookmark-outline'} size={22} color={ isBookmarked(item._id)? colors.accentRed : colors.inkSecondary} onPress={handleBookmarkPress} />
                </View>
                
                <View style={styles.footer}>
                    <Tag categoryName={item.categoryName} color={colors.inkSecondary} />
                    <View style={{width: 3, height: 3, borderRadius: 1.5, backgroundColor: 'gray'}} />
                    <Caption time={item.time} />                    
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
