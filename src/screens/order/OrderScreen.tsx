import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../../components/order/OrderItem'
const OrderScreen = () => {

    const orders = [
        {
            id: 1,
            totalPrice: 1290,
            date: '2025-01-01'
        },
        {
            id: 2,
            totalPrice: 700,
            date: '2024-08-04'
        },
        {
            id: 3,
            totalPrice: 120,
            date: '2025-11-23'
        },
    ]

  return (
    <View>
        <FlatList
            data={orders}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) =>  <OrderItem {...item}/>}
        />
       
    </View>
  )
}
export default OrderScreen
const styles = StyleSheet.create({})