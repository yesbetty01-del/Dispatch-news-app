import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { SystemBars } from 'react-native-edge-to-edge';
import useTheme from '../../store/useTheme';
import { useEffect } from 'react';
import { getItems } from '../../utils/storage';
import {
    useFonts,
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

export default function Layout() {
    const { colors, setTheme } = useTheme();
    useEffect(() => {
        const LoadTheme = async () => {
            const storedTheme = await getItems('themeMode');
            if(storedTheme){
                setTheme(storedTheme);
            }
            else{
                return null;
            }
        }
        LoadTheme();
    }, []);

    const [fontsLoaded] = useFonts({
        Syne_400Regular,
        Syne_500Medium,
        Syne_600SemiBold,
        Syne_700Bold,
        Syne_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }
    return(
        <>
        <SystemBars style={colors.statusBarStyle} />
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor: colors.containerLowest,
                //setOffset: 0,
                borderTopWidth: 0,
            },
            tabBarActiveTintColor: colors.accentRed,
            tabBarInactiveTintColor: colors.inkMuted,
        }}>
            <Tabs.Screen name='index' options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                <Feather name="home" size={24} color={color} />
                ),
            }}/>
            
            <Tabs.Screen name='discover' options={{
                title: 'Discover',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <Feather name="compass" size={24} color={color} />
                )
            }}
            />

            <Tabs.Screen name='saved' options={{
                title: 'Saved',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <Feather name="bookmark" size={24} color={color} />
                )
            }}
            />

            <Tabs.Screen name='alerts' options={{
                title: 'Alerts',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <Feather name="bell" size={24} color={color} />
                )
            }}
            />

            <Tabs.Screen name='profile' options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({color, focused}) => (
                    <Feather name="user" size={24} color={color} />
                )
            }}
            />
        </Tabs>
        </>
    )
}