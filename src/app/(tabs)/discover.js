import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import CategoryCard from '../../components/categoryCard';
import { api } from "../../../convex/_generated/api";
import { useQuery } from 'convex/react';
import { router } from 'expo-router';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Discover = () => {
    const { colors, spacing } = useTheme();
    const styles = createStyles(colors, spacing);
    const [searchcaregory, setSearchCaregory] = useState("");

    const categories = useQuery(api.categories.getAllCategories);
    const cat = categories?.slice(1)

    const availableWidth = SCREEN_WIDTH - (spacing.xl * 2);
    const cardWidth = (availableWidth - spacing.md) / 2;

    if(!categories) {
        return(
            <SafeAreaView style={styles.container} edge={["top", "left", "right"]} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text>Loading...</Text>
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <Header header={'Discover'} />
            <SearchInput
                value={searchcaregory}
                onChangeText={setSearchCaregory}
                placeHolder={"Search categories"}
            />
            <FlatList
                data={cat}
                keyExtractor={(item) => item._id}
                numColumns={2}
                contentContainerStyle={{ paddingTop: spacing.lg, gap: spacing.md }}
                columnWrapperStyle={{ justifyContent: 'space-between', gap: spacing.md }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => router.push(`/categories/${item.categoryName}`)}
                        style={{
                            backgroundColor: colors.containerLowest,
                            paddingVertical: spacing.xl,
                            paddingHorizontal: spacing.lg,
                            width: cardWidth,
                            borderColor: colors.containerLow,
                            borderWidth: 2,
                            borderRadius: spacing.xl,
                        }}
                    >
                        <CategoryCard
                            iconName={item.iconName}
                            iconColor={item.iconColor}
                            iconBackground={item.iconBackground}
                            categoryName={item.categoryName}
                            articleCount={item.articleCount}
                        />
                    </Pressable>
                )}
            />
        </SafeAreaView>
    );
}

const createStyles = (colors, spacing) => StyleSheet.create({
    container: {
        backgroundColor: colors.surface,
        flex: 1,
        paddingHorizontal: spacing.xl,
    }
})

export default Discover;
