import { Image, StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView'
import { sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { IMAGES } from '../../contants/images-paths'
import { s, vs } from 'react-native-size-matters'
import AppTextInput from '../../components/inputs/AppTextInput'
import { useState } from 'react'
import AppText from '../../components/texts/AppText'
import AppButton from '../../components/buttons/AppButton'
import { AppColors } from '../../styles/colors'


const SignInScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInput placeholder='Email' onChangeText={setEmail} value={email} />
            <AppTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry value={password} />
            <AppText variant='bold' style={styles.appName}>Smart E-Commerce</AppText>

            <AppButton title="Login"/>
            <AppButton 
                title="Sign Up" 
                style={styles.registerButton} 
                backgroundColor={AppColors.white} 
                color={AppColors.black}
            />
        </AppSafeView>
    )
}
export default SignInScreen
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
    registerButton: {
        borderWidth: 1,
        marginTop: vs(15),
        borderColor: AppColors.primary
    }
})