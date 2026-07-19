import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheme';

const Tag = ({ categoryName, color }) => {
    const { colors, spacing, fSize } = useTheme();
    return (   
        <Text style={{ color: color || colors.accentRed, fontSize: fSize.caption, fontFamily: 'Syne_600SemiBold'}}>
            {categoryName}
        </Text> 
    );
}

const styles = StyleSheet.create({})

export default Tag;
