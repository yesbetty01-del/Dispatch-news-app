import { useState } from 'react';
import { StyleSheet, Pressable, Text, ScrollView } from 'react-native';
import { Categories } from '../data/categories';
import useTheme from '../store/useTheme';

const Chips = () => {
    const { colors, spacing } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState( Categories[0] );

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
            {Categories.map((category, index) => (
                <Pressable
                    key={index}
                    onPress={() => setSelectedCategory(category)}
                    style={[
                        styles.chip,
                        {
                            backgroundColor: 
                                selectedCategory === category
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
                                selectedCategory === category
                                ? colors.surface
                                : colors.inkSecondary
                        }}
                    >
                        {category}
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