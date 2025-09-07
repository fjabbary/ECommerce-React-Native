import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppColors } from '../../styles/colors'
import { commonStyles, sharedPaddingHorizontal } from '../../styles/sharedStyles'
import { s, vs } from 'react-native-size-matters'

interface OrderProps {
    totalPrice: number,
    date: string
}

const OrderItem: FC<OrderProps> = ({ totalPrice, date }) => {
    return (
        <View style={styles.container}>
            <Text>ORDER DETAILS:</Text>
            <View style={styles.separator} />
            <View style={styles.row}>
                <Text style={styles.totalPrice}>Total Price:</Text>
                <Text style={styles.totalPriceText}>${totalPrice}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.date}>Date:</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>
        </View>
    )
}
export default OrderItem
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.white,
        ...commonStyles.shadow,
        marginVertical: vs(5),
        paddingHorizontal: sharedPaddingHorizontal,
        marginHorizontal: s(12),
        paddingVertical: vs(12),
        fontSize: s(219),
        borderRadius: s(10)
    },
    separator: {
        height: 1,
        backgroundColor: AppColors.black,
        marginVertical: vs(8)
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    totalPrice: {
        fontSize: s(16)

    },
    totalPriceText: {
        fontSize: s(14),
        color: AppColors.maroon
    },
    date: {
        fontSize: s(16)
    },
    dateText: {
        color: AppColors.maroon,
        fontSize: s(14),
    }
})