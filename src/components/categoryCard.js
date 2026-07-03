import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheme';
import { Ionicons } from '@expo/vector-icons';

const CategoryCard = ({ iconName, iconColor, iconBackground, categoryName, articleCount }) => {
    const { colors, fSize, spacing } = useTheme();
    return (
        <View>
            <View style={{
                alignSelf: 'flex-start',
                backgroundColor: iconBackground,
                justifyContent: 'center',
                alignItems: 'center',
                padding: spacing.md,
                borderRadius: spacing.lg}}
            >
                <Ionicons name={iconName} size={30} color={iconColor} />
            </View>
            <Text style={{fontFamily: 'Syne_700Bold', fontSize: fSize.body, color: colors.inkPrimary, marginTop: spacing.md}}>
                {categoryName}
            </Text>
            <Text style={{fontSize: fSize.caption, color: colors.inkMuted, marginTop: spacing.sm}}>
                {articleCount} articles
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryCard;
