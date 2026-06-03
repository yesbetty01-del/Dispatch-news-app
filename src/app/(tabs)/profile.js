import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import useTheme from '../../store/useTheme';

const Profile = () => {
    const {toggleTheme} = useTheme();
    return (
        <View style={styles.container}>
            <Button title='change theme' onPress={toggleTheme} />
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile;
