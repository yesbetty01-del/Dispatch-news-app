import {create} from 'zustand';
import themes from '../utils/colors';
import Typography from '../utils/typography';
import { setItems, getItems } from '../utils/storage';

const useTheme = create((set, get)=> {
    return {
        themeMode: 'light',
        colors: themes.light,
        fSize: Typography.fontSize,
        spacing: Typography.spacing,
        setTheme: (storedTheme) => set({themeMode: storedTheme, colors: themes[storedTheme]}),
        toggleTheme: async () => {
            const currentTheme = get().themeMode;
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            await setItems('themeMode', newTheme);
            set({themeMode: newTheme, colors: themes[newTheme]});
        }
    }
});
export default useTheme;