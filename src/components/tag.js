import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Tag = ({ tagLabel }) => {
    const { colors, spacing, fSize } = useTheme();
    return (   
        <Text style={{ color: colors.accentRed, fontSize: fSize.caption}}>
            {tagLabel}
        </Text> 
    );
}

const styles = StyleSheet.create({})

export default Tag;
