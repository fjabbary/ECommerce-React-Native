import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native'
import { vs, s } from 'react-native-size-matters'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/colors'

interface AppButtonProps {
    onPress: () => void;
    title: string;
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    style?: TextStyle
  }

const AppButton: React.FC<AppButtonProps> = ({ onPress, title, backgroundColor = AppColors.black, color = AppColors.white, disabled, style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.button, { backgroundColor: disabled ? AppColors.diabledGray : backgroundColor }, style]}
            disabled={disabled}
        >
            <AppText variant='bold' style={[styles.textTitle, { color }]}>{title}</AppText>
        </TouchableOpacity>
    )
}
export default AppButton
const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: vs(40),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: s(25),
        alignSelf: "center"
    },
    textTitle: {
        fontSize: s(16)
    }
})