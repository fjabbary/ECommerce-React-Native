import { FlatList, StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
import EmptyCart from './EmptyCart'
import CartItem from '../../components/cart/CartItem'
import { products } from '../../data/products'
import TotalView from '../../components/cart/TotalView'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { removeItemFromCart, increaseCartItemQty, decreaseCartItemQty } from '../../store/reducers/cartSlice'
import { UseDispatch } from 'react-redux'


const CartScreen = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch()
  const totalItemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  const orderTotal = totalItemsPrice + 25;


  return (
    <AppSafeView>
      <HomeHeader />
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length > 0 &&
        <>
          <FlatList
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <CartItem {...item} onDeletePress={() => dispatch(removeItemFromCart(item))} onDecreasePress={() => dispatch(decreaseCartItemQty(item))} onIncreasePress={() => dispatch(increaseCartItemQty(item))} />}
            showsVerticalScrollIndicator={false}
          />

          <TotalView itemsPrice={totalItemsPrice} orderTotal={orderTotal} />
        </>
      }

    </AppSafeView>
  )
}
export default CartScreen
const styles = StyleSheet.create({})