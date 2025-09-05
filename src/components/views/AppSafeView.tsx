import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, ViewStyle } from 'react-native'
import { AppColors } from '../../styles/colors'
import React, { FC, ReactNode } from 'react';
import { IS_ANDROID } from '../../contants/constants';

interface AppSafeViewProps {
    children: ReactNode,
    style: ViewStyle
}

const AppSafeView: FC<AppSafeViewProps> = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.container, style]}>{children}</View>
        </SafeAreaView>
    )
}
export default AppSafeView
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: IS_ANDROID ? StatusBar.currentHeight || 0 : 0
    },
    container: {
        flex: 1
    }
})