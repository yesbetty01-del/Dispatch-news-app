import { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Pressable, Text, Alert } from 'react-native';
import useTheme from '../store/useTheme';
import Tag from './tag';
import Caption from './caption';
import Icon from './icon';

const ListView = ({ imageUrl,tagLabel, title, time }) => {
    const { colors, fSize, spacing } = useTheme();

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
                    <Icon name= 'bookmark' />
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
