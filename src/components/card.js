import React from 'react';
import { StyleSheet, View, Pressable, ImageBackground } from 'react-native';
import useTheme from '../store/useTheme';
import HeroTitle from './heroTitle';
import { LinearGradient } from 'expo-linear-gradient';
import Tag from './tag';
import Caption from './caption';

const Card = ({Title}) => {
    const source = {
        uri: 'https://static.vecteezy.com/system/resources/previews/026/423/787/non_2x/abstract-technology-background-with-circuit-board-and-blue-lights-digital-communication-line-concept-graphic-hardware-computer-tech-integrated-energy-design-information-internet-generative-ai-photo.jpg'
    };
    const { colors, fSize, spacing } = useTheme();
    return (
        <Pressable
            onPress={() => alert('Card pressed')}
            style={[styles.pressable, { borderRadius: spacing.lg }]}
        >
            <ImageBackground source={source} style={[styles.imageBackground]}>
                <LinearGradient
                    colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.25)", "rgba(0,0,0,0.82)"]}
                    style={[styles.gradient, { padding: spacing.lg}]}
                >
                
                    <View style={[styles.contents, {gap: spacing.md}]}>
                        <Tag tagLabel={'Breaking - AI'} />    
                        <HeroTitle Title={Title} />
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
