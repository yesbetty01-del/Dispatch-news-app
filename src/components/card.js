import React from 'react';
import { StyleSheet, View, Pressable, ImageBackground } from 'react-native';
import useTheme from '../store/useTheme';
import HeroTitle from './heroTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Tag from './tag';
import Caption from './caption';
import { router } from 'expo-router';

const Card = ({ item }) => {
    const { spacing } = useTheme();
     if(!item) {
        return null;
     }
    return (
        <Pressable
            onPress={() => router.push(`/article/${item._id}`)}
            style={[styles.pressable, { borderRadius: spacing.lg }]}
        >
            <ImageBackground source={{ uri: item.imageUrl }} style={[styles.imageBackground]}>
                <LinearGradient
                    colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.82)"]}
                    style={[styles.gradient, { padding: spacing.lg}]}
                >
                
                    <View style={[styles.contents, {gap: spacing.md}]}>
                        <Tag categoryName={`Breaking - ${item.categoryName}`} />    
                        <HeroTitle Title={item.title} />
                        <Caption time={'2h ago'} readTime={'5 min read'} />
                    </View>
                </LinearGradient>
            </ImageBackground>
            
        </Pressable>
    );
}

const styles = StyleSheet.create({
    pressable: {
        height: 200,
        width: '100%',
        overflow: 'hidden'
    },
    imageBackground: {
        flex: 1,
    },
    gradient: {
        flex: 1
    },
    contents: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default Card;
