import useTheme from '../store/useTheme';
import { Feather } from '@expo/vector-icons';

export default function Icon ({name, action}) {
    const { colors } = useTheme();
        
    return (
        <Feather name={name} size={16} color={colors.inkSecondary} onPress={action} />
    );
}
