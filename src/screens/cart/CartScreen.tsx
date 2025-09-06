import { FlatList, StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import { products } from '../../data/products'
import TotalView from '../../components/cart/TotalView'
const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      {/* <EmptyCart /> */}
      <FlatList 
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <CartItem {...item} onDeletePress={() => {}}/>}
      showsVerticalScrollIndicator={false}
      />

      <TotalView itemsPrice={0} orderTotal={0}/>

    </AppSafeView>
  )
}
export default CartScreen
const styles = StyleSheet.create({})