import React from 'react'
import { StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import {s} from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'

interface AppTextProps extends TextProps {
    children: React.ReactNode,
    style?: TextStyle | TextStyle[],
    variant: "bold" | "medium"
}

const AppText: React.FC<AppTextProps> = ({ children, style, variant = "medium", ...rest }) => {
    return (
        <View>
            <Text {...rest} style={[styles[variant], style]}>
                {children}
            </Text>
        </View>
    )
}
export default AppText
const styles = StyleSheet.create({
    bold: {
        fontSize: s(18),
        color: AppColors.black
    },
    medium: {
        fontSize: s(16),
        color: AppColors.black
    }
})