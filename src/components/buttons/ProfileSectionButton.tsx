import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { s, vs } from 'react-native-size-matters';
import { sharedPaddingHorizontal } from '../../styles/sharedStyles';
import { AppColors } from '../../styles/colors';
import { FC } from 'react';

interface ProfileSectionButtonProps {
    title: string,
    onPress: () => void
}

const ProfileSectionButton: FC<ProfileSectionButtonProps> = ({title, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.row} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        <AntDesign name="right" size={16} color="black" />
      </TouchableOpacity>
    </View>
  )
}
export default ProfileSectionButton
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingVertical: vs(16),
        justifyContent: "space-between",
        paddingHorizontal: sharedPaddingHorizontal,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.blueGray
    },
    text: {
        fontSize: s(16)
    }
})