import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import useTheme from '../store/useTheme';

const Caption = ({time, readTime}) => {
    const { colors, spacing, fSize } = useTheme();
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', gap: spacing.md}}>
            <Feather name='clock' size={16} color={'gray'} />
            <Text style={{color: 'gray', fontSize: fSize.caption}}>
                {time}
            </Text>
            <View style={{width: 4, height: 4, borderRadius: 2, backgroundColor: 'gray'}} />
            <Text style={{color: 'gray', fontSize: fSize.caption}}>
                {readTime}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Caption;
