import { StyleSheet, Text, View } from 'react-native'
import HomeHeader from '../../components/headers/HomeHeader'
import AppSafeView from '../../components/views/AppSafeView'
import ProfileSectionButton from '../../components/buttons/ProfileSectionButton'
import AppText from '../../components/texts/AppText'
const ProfileScreen = () => {
  return (
    <AppSafeView>
      <HomeHeader />
      <View>
        <AppText>Hello John Doe</AppText>
        <ProfileSectionButton title="My Orders" onPress={() => {}} />
        <ProfileSectionButton title="Languages" onPress={() => {}} />
        <ProfileSectionButton title="Logout" onPress={() => {}} />
      </View>
    </AppSafeView>
  )
}
export default ProfileScreen
const styles = StyleSheet.create({})