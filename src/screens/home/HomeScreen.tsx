import { FlatList, StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import { AppFonts } from '../../styles/fonts'
import ProductCard from '../../components/cards/ProductCard'
import { products } from '../../data/products'
import { s, vs } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/reducers/cartSlice'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        columnWrapperStyle={styles.list}
        contentContainerStyle={styles.container}
        numColumns={2}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard title={item.title} price={item.price} imageURL={item.imageURL} onAddToCartPress={() => dispatch(addItemToCart(item)) } />
        }
      />
    </AppSafeView>
  )
}
export default HomeScreen
const styles = StyleSheet.create({
  list: {
    justifyContent: "space-between",
    marginBottom: vs(10)
  },
  container: {
    paddingHorizontal: s(10)
  }
})