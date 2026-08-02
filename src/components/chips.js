import { useState } from 'react';
import { StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Categories } from '../../convex/category';
import useTheme from '../store/useTheme';

const Chips = ({ categories, selectedCategory, setSelectedCategory }) => {
    const { colors, spacing } = useTheme();
    
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[
                styles.container,
                {
                    marginVertical: spacing.xxl,
                },
            ]}
            contentContainerStyle={{
                alignItems: 'center',
                gap: spacing.sm
            }}
        >
            {categories.map((category) => (
                <Pressable
                    key={category._id}
                    onPress={() => setSelectedCategory(category.categoryName)}
                    style={[
                        styles.chip,
                        {
                            backgroundColor: 
                                selectedCategory === category.categoryName
                                ? colors.inkPrimary
                                : colors.surfaceDim,
                            paddingHorizontal: 17,
                            paddingVertical: spacing.md,
                        }
                    ]}
                >
                    <Text
                        style={{
                            color:
                                selectedCategory === category.categoryName
                                ? colors.surface
                                : colors.inkSecondary
                        }}
                    >
                        {category.categoryName}
                    </Text>
                </Pressable>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 0,
    },
    chip: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Chips;