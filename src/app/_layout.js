import { Stack } from 'expo-router';
import { SystemBars } from 'react-native-edge-to-edge';
import useTheme from '../store/useTheme';
import { useEffect } from 'react';
import { getItems } from '../utils/storage';
import {
    useFonts,
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

import { ConvexProvider, ConvexReactClient } from "convex/react";
const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL);

const Layout = () => {
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
        <ConvexProvider client={convex}>
            <SystemBars style={colors.statusBarStyle} />
            <Stack
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="article/[id]" />
            </Stack>
        </ConvexProvider>
    )
}

export default Layout;
