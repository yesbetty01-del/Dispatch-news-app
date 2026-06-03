import {create} from 'zustand';
import themes from '../utils/colors';

const useTheme = create((set)=> {
    return {
        themeMode: 'light',
        colors: themes.light,
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