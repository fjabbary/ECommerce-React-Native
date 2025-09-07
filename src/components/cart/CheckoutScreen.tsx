import { StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../views/AppSafeView'
import AppTextInput from '../inputs/AppTextInput'
import { s } from 'react-native-size-matters'
import { commonStyles } from '../../styles/sharedStyles'
import AppButton from '../buttons/AppButton'


const CheckoutScreen = () => {

    return (
        <AppSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <AppTextInput placeholder='Full Name' value="" onChangeText={() => { }} />
                <AppTextInput placeholder='Phone Number' value="" onChangeText={() => { }} />
                <AppTextInput placeholder='Detailed Address' value="" onChangeText={() => { }} />
            </View>


            <View style={styles.btnContainer}>
                <AppButton title="Confirm" onPress={() => {}}/>
            </View>
        </AppSafeView>
    )
}
export default CheckoutScreen
const styles = StyleSheet.create({
    container: {
        paddingTop: s(24),
        paddingHorizontal: s(12),
        flex: 1,
        justifyContent: 'space-between',
      
    },
    inputContainer: {
        ...commonStyles.shadow,
    },
    btnContainer: {
        marginBottom: s(16)
    }
})