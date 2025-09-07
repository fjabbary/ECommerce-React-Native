
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import MainAppBottomTabs from "./MainAppBottomTabs";
import CheckoutScreen from "../components/cart/CheckoutScreen";
import OrderScreen from "../screens/order/OrderScreen";

const Stack = createStackNavigator();


export default function MainAppStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="MainAppBottomTabs" component={MainAppBottomTabs} />
            <Stack.Screen name="Checkout" component={CheckoutScreen} options={{ headerShown: true}} />
            <Stack.Screen name="MyOrders" component={OrderScreen} options={{ headerShown: true, title: "My Orders"}} />
        </Stack.Navigator>
    )
}