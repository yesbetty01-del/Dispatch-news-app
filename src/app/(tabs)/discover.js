import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useTheme from '../../store/useTheme';
import Header from '../../components/header';
import SearchInput from '../../components/searchInput';
import { Categories } from '../../data/categories';
import CategoryCard from '../../components/categoryCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const Discover = () => {
    const { colors, spacing } = useTheme();
    const styles = createStyles(colors, spacing);
    const [searchcaregory, setSearchCaregory] = useState("");

    const availableWidth = SCREEN_WIDTH - (spacing.xl * 2);
    const cardWidth = (availableWidth - spacing.md) / 2;

    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <Header header={'Discover'} />
            <SearchInput
                value={searchcaregory}
                onChangeText={setSearchCaregory}
                placeHolder={"Search categories"}
            />
            <FlatList
                data={Categories.splice(1)}
                keyExtractor={(item) => item._id}
                numColumns={2}
                contentContainerStyle={{ paddingTop: spacing.lg, gap: spacing.md }}
                columnWrapperStyle={{ justifyContent: 'space-between', gap: spacing.md }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => Alert.alert(`You selected ${item.categoryName}`)}
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
