import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { SystemBars } from 'react-native-edge-to-edge';
import useTheme from '../../store/useTheme';
export default function Layout() {
    const { colors } = useTheme();
    return(
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
    )
}