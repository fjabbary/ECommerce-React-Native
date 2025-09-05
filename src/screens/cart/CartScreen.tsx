import { StyleSheet, Text, View } from 'react-native'
import AppSafeView from '../../components/views/AppSafeView'
import HomeHeader from '../../components/headers/HomeHeader'
const CartScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader/>
      <Text>Cart Screen</Text>
    </AppSafeView>
  )
}
export default CartScreen
const styles = StyleSheet.create({})