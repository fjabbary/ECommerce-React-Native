import { Controller, FieldValues } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from './AppTextInput'
import AppText from '../texts/AppText'
import { AppColors } from '../../styles/colors'
import { s, vs } from 'react-native-size-matters'

const AppTextInputController = ({ control, name, rules, placeholder, secureTextEntry, keyboardType }) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                field: { onChange, value },
                fieldState: { error }
            }) =>
                <>
                    <AppTextInput
                        value={value}
                        onChangeText={onChange}
                        placeholder={placeholder}
                        secureTextEntry={secureTextEntry}
                        keyboardType={keyboardType}
                        style={error && styles.errorInput}
                    />
                    {error && <AppText style={styles.textError}>{error?.message}</AppText>}
                </>
            }
        />
    )
}
export default AppTextInputController
const styles = StyleSheet.create({
    errorInput: {
        borderColor: AppColors.red,
    },
    textError: {
        color: AppColors.red,
        fontSize: s(12),
        textAlign: "center",
        marginBottom: vs(10)
    }
})