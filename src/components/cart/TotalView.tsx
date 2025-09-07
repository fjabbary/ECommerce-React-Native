import { StyleSheet, Text, View } from 'react-native'
import AppText from '../texts/AppText';
import { FC } from 'react';
import { AppColors } from '../../styles/colors';
import { s } from 'react-native-size-matters';
import AppButton from '../buttons/AppButton';
import { useNavigation } from '@react-navigation/native';


interface TotalViewProps {
    itemsPrice: number;
    orderTotal: number
}

const TotalView: FC<TotalViewProps> = ({ itemsPrice, orderTotal }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <AppText>Item Price: </AppText>
                <AppText>${itemsPrice}</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Taxes: </AppText>
                <AppText>$10</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Shipping Fee</AppText>
                <AppText>{itemsPrice}</AppText>
            </View>
            <View style={styles.separator} />

            <View style={styles.row}>
                <AppText>Order Total:</AppText>
                <AppText>${orderTotal}</AppText>
            </View>
            <AppButton style={styles.button} title="Continue" onPress={() => navigation.navigate("Checkout")}/>
        </View>
    )
}
export default TotalView
const styles = StyleSheet.create({
    row: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: s(8)
    },
    separator: {
        height: 1,
        backgroundColor: AppColors.blueGray
    },
    container: {
        paddingHorizontal: s(15),
        paddingTop: s(20),
        borderTopWidth: 1,
        borderTopColor: AppColors.blueGray
    },
    button: {
        marginVertical: s(10)
    }
})