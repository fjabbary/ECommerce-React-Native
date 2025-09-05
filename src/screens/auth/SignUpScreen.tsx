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
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const navigation = useNavigation()

    return (
        <AppSafeView style={styles.container}>
            <Image source={IMAGES.appLogo} style={styles.logo} />
            <AppTextInput placeholder='Username' onChangeText={setUserName} value={username} />
            <AppTextInput placeholder='Email' onChangeText={setEmail} value={email} />
            <AppTextInput placeholder='Password' onChangeText={setPassword} secureTextEntry value={password} />

            <AppText variant='bold' style={styles.appName}>Smart E-Commerce</AppText>

            <AppButton title="Create New Account"/>
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