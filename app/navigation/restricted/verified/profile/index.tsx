import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Profile, ChangePassword} from "@app/screens";
import {ProfileStackParamList} from "@app/navigation/models";
import Header from "@app/screens/profile/header";

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    screenOptions={{
      headerTransparent: true,
      title: ""
    }}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }: { navigation: any }) => ({
        header: () => (<Header navigation={navigation} />)
      })}
    />

    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
    />
  </Stack.Navigator>
)

export default ProfileNavigator;