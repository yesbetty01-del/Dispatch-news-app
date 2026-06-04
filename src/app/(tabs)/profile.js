import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import useTheme from '../../store/useTheme';

const Profile = () => {
    const {toggleTheme, colors} = useTheme();
    const styles = createStyles(colors);
    
    return (
        <View style={styles.container}>
            <Button title='change theme' onPress={toggleTheme} />
        
        </View>
    );
}

const createStyles = (colors) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.surface,
    }
})

export default Profile;
