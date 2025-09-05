import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import { AppColors } from '../../styles/colors'
import AppText from '../texts/AppText'
import { AppFonts } from '../../styles/fonts'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { commonStyles } from '../../styles/sharedStyles'


const ProductCard = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.addToCartButton}>
                <FontAwesome name="shopping-cart" size={24} color={AppColors.white} style={{ fontSize: s(16) }} />
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: "https://www.hindustantimes.com/ht-img/img/2025/08/29/550x309/iphone_17_1750661575100_1756468203730.jpeg" }} />
            </View>

            <View style={styles.detailsContainer}>
                <AppText style={styles.titleText}>Iphone 15</AppText>
                <AppText style={styles.priceText}>$1500</AppText>
            </View>
        </View>
    )
}
export default ProductCard
const styles = StyleSheet.create({
    container: {
        width: s(160),
        height: s(180),
        backgroundColor: AppColors.white,
        borderRadius: s(10),
        ...commonStyles.shadow
    },
    imageContainer: {
        overflow: "hidden",
        borderTopLeftRadius: s(10),
        borderTopRightRadius: s(10),
        height: vs(110),
        width: "100%",
        paddingTop: s(12),
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    detailsContainer: {
        flex: 1,
        paddingTop: s(8),
        paddingBottom: vs(15),
        paddingHorizontal: s(10)
    },
    titleText: {
        fontSize: s(14),
        fontFamily: AppFonts.Medium,
        color: AppColors.primary
    },
    priceText: {
        fontSize: s(14),
        fontFamily: AppFonts.Bold,
        color: AppColors.primary
    },
    addToCartButton: {
        height: s(28),
        width: s(28),
        position: "absolute",
        left: 5,
        top: 5,
        borderRadius: s(14),
        backgroundColor: AppColors.primary,
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})