import { StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AppText from '../../components/texts/AppText';
import { AppColors } from '../../styles/colors';
import AppButton from '../../components/buttons/AppButton';
import { s, vs } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';


const EmptyCart = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons size={100} name="shopping-outline" color="black" style={styles.icon}/>
            <AppText
                style={styles.title}
                variant='bold'>Your Cart is Empty</AppText>
            <AppText
                style={styles.subtitle}
                variant='medium'>Browser the prodcuts and find something that you like</AppText>

            <AppButton title="Start Shopping" onPress={() => navigation.navigate("home")} />
        </View>
    )
}
export default EmptyCart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: s(20)
    },
    title: {
        color: AppColors.primary,
        marginBottom: vs(10),
        
    },
    subtitle: {
        color: AppColors.medGray,
        marginBottom: vs(20),
        textAlign: "center"
    },
    icon: {
       opacity: 0.8
    }
})