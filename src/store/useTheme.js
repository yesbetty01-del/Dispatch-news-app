import {create} from 'zustand';
import themes from '../utils/colors';
import Typography from '../utils/typography';

const useTheme = create((set)=> {
    return {
        themeMode: 'light',
        colors: themes.light,
        fSize: Typography.fontSize,
        spacing: Typography.spacing,
        toggleTheme: () => set((currentMode) => {
            if(currentMode.themeMode === 'light'){
                return { themeMode: 'dark', colors: themes.dark }
            } else {
                return { themeMode: 'light', colors: themes.light }
            }
        })
    }
});
export default useTheme;