import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { AppColors } from '../styles/colors';
import { s, vs } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';
import { IS_ANDROID } from '../contants/constants';

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: AppColors.primary,
                tabBarLabelStyle: {
                    marginTop: vs(4),
                    fontSize: s(12)
                },
                tabBarStyle: IS_ANDROID && {
                    height: vs(50)
                }
            }}>
            <Tab.Screen name="home" component={HomeScreen} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
                title: "Home"
            }} />
            <Tab.Screen name="cart" component={CartScreen} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
                title: "Cart"
            }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
                title: "Profile"
            }} />
        </Tab.Navigator>
    )
}