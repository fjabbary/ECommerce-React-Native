import { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from '../texts/AppText'
import AntDesign from '@expo/vector-icons/AntDesign';
import { AppColors } from '../../styles/colors';
import { s } from 'react-native-size-matters';
import EvilIcons from '@expo/vector-icons/EvilIcons';

interface CartItemProps {
    imageURL: string,
    title: string,
    price: number,
    onDeletePress: () => void
}

const CartItem: FC<CartItemProps> = ({ imageURL, title, price, onDeletePress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageURL }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <AppText>{title}</AppText>
                <AppText>${price}</AppText>
                <View style={styles.qtyContainer}>
                    <TouchableOpacity>
                        <EvilIcons name="minus" size={24} color="black" style={styles.btn} />
                    </TouchableOpacity>
                    <AppText style={styles.qty}>{4}</AppText>
                    <TouchableOpacity >
                        <EvilIcons name="plus" size={24} color="black" style={styles.btn} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.deleteContainer}>
                <AntDesign name="delete" size={24} color={AppColors.red} />
            </View>
        </View>
    )
}
export default CartItem
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 120,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: AppColors.blueGray,
        
    },
    imageContainer: {
        flex: 1.5,
        padding: s(10)
    },
    image: {
        width: "100%",
        height: "100%"
    },
    detailsContainer: {
        flex: 3.5,
        justifyContent: "center"
    },
    deleteContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    qtyContainer: {
        height: 32,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        paddingHorizontal: s(4),
        alignItems: "center",
        alignSelf: 'flex-start'
    },
    btn: {
        backgroundColor: AppColors.blueGray,
        borderRadius: 20,     // circular
        alignItems: 'center', // center icon
        justifyContent: 'center'
    },
    qty: {
        paddingHorizontal: s(5)
    }
})