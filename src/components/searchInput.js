import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import Icon from './icon';
import useTheme from '../store/useTheme';

const SearchInput = ({value, onChangeText}) => {
    const {colors, fSize, spacing} = useTheme();
    const searchingTopic = (value) => {
        Alert.alert('Search', `You searched for ${value}`);
    }
    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.surfaceDim,
                    paddingVertical: spacing.xs,
                    paddingHorizontal: spacing.lg,
                    borderRadius: spacing.xl,
                    marginTop: spacing.xxl,
                    gap: spacing.lg
                }
            ]}
        >
            <Icon name='search' action={() => searchingTopic(value)} />
                <TextInput
                    style={[
                        styles.input,
                        {
                            color: colors.inkPrimary,
                            fontSize: fSize.body
                        }
                    ]}
                    value={value}
                    onChangeText={onChangeText}
                    placeholder='Search topics, authors, or keywords'
                    placeholderTextColor={colors.inkSecondary}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1
    }
})

export default SearchInput;
