import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs () {
    return (
        <Tab.Navigator screenOptions={{headerShown: true}}>
            <Tab.Screen name="home" component={HomeScreen}/>
            <Tab.Screen name="cart" component={CartScreen}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
        </Tab.Navigator>
    )
}