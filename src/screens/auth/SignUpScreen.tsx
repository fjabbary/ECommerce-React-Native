import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../contants/images-paths'
import { s, vs } from 'react-native-size-matters'
// import AppTextInput from '../../components/inputs/AppTextInput'
import { useState } from 'react'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import { AppColors } from '../../styles/colors'
import { useNavigation } from '@react-navigation/native'

import AppTextInputController from '../../components/inputs/AppTextController'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'



const schema = yup.object({
    username: yup
        .string()
        .required("Username is required")
        .min(3, "email must at least 3 characters"),

    email: yup
        .string()
        .required("Email is required")
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
        .min(3, "email must be valid"),

    password: yup
        .string()
        .required("Password is required")
        .min(6, 'Password must be 6 digits'),

}).required();


const SignUpScreen = () => {

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const navigation = useNavigation()

    const customSubmitFn = () => {
        Alert.alert('create new account')
    }

    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInputController 
                placeholder='Username' 
                control={control} 
                name='username' 
                rules={{ required: true }} 
                secureTextEntry={false} 
                keyboardType="default" 
            />
            <AppTextInputController 
                placeholder='Email' 
                control={control} 
                name='email' 
                rules={{ required: true }} 
                secureTextEntry={false} 
                keyboardType="email-address" 
            />
            <AppTextInputController 
                placeholder='Password' 
                secureTextEntry 
                control={control} 
                name='password' 
                rules={{ required: true }} 
                keyboardType="default" 
            />

            <AppText variant='bold' style={styles.appName}>Smart E-Commerce</AppText>

            <AppButton title="Create New Account" onPress={handleSubmit(customSubmitFn)} />
            <AppButton
                title="Go To Sign In"
                style={styles.signInButton}
                backgroundColor={AppColors.white}
                color={AppColors.black}
                onPress={() => navigation.navigate("SignInScreen")}
            />
        </AppSafeView>
    )
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingHorizontal: sharedPaddingHorizontal
    },
    logo: {
        width: s(150),
        height: s(150),
        marginBottom: vs(30)
    },
    appName: {
        fontSize: s(16),
        marginBottom: vs(16)
    },
    signInButton: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColors.primary
    }
})