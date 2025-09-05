import { StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import { AppFonts } from '../../styles/fonts'


const HomeScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <Text style={{ fontSize: 60 }}>Home Screen</Text>
      <Text style={{ fontSize: 60, fontFamily: AppFonts.Bold }}>Home Screen</Text>
      <Text style={{ fontSize: 60, fontFamily: AppFonts.Medium }}>Home Screen</Text>
    </AppSafeView>
  )
}
export default HomeScreen
const styles = StyleSheet.create({})