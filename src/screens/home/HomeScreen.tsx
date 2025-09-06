import { FlatList, StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import { AppFonts } from '../../styles/fonts'
import ProductCard from '../../components/cards/ProductCard'
import { products } from '../../data/products'
import { s, vs } from 'react-native-size-matters'


const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <FlatList
        columnWrapperStyle={styles.list}
        contentContainerStyle={styles.container}
        numColumns={2}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard title={item.title} price={item.price} imageURL={item.imageURL} onAddToCartPress={() => { }} />
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