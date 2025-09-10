import { StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../views/AppSafeView'
import AppTextInput from '../inputs/AppTextInput'
import { s } from 'react-native-size-matters'
import { commonStyles } from '../../styles/sharedStyles'
import AppButton from '../buttons/AppButton'
import AppTextInputController from '../inputs/AppTextController'
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'


const schema = yup.object({
    fullName: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),

    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Phone number must be 10 digits'),

    address: yup
    .string()
    .required("Address is required")
    .min(15, "Please provide detailed address at least 15 characters"),
}).required();

const CheckoutScreen = () => {
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const saveOrder = (formData) => {
        console.log(formData)
    }

    return (
        <AppSafeView style={styles.container}>
            <View style={styles.inputContainer}>
                <AppTextInputController control={control} name="fullName" placeholder='Full Name' />
                <AppTextInputController control={control} name="phoneNumber" placeholder='Phone Number' />
                <AppTextInputController control={control} name="address" placeholder='Detailed Address' />
            </View>


            <View style={styles.btnContainer}>
                <AppButton title="Confirm" onPress={handleSubmit(saveOrder)} />
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