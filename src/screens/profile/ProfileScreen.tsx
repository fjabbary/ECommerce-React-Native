import { StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text>Profile Screen</Text>
    </AppSafeView>
  )
}
export default ProfileScreen
const styles = StyleSheet.create({})