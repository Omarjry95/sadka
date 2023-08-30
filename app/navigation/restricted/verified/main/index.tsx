import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import {Homepage, Spontaneous} from "@app/screens";
import HeaderRight from "@app/screens/homepage/headerRight";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="Homepage"
    screenOptions={{
      headerTransparent: true,
      title: ""
    }}
  >
    <Stack.Screen
      name="Homepage"
      component={Homepage}
      options={({ navigation }) => ({
        headerRight: () => (
          <HeaderRight navigation={navigation} />
        )
      })}
    />

    <Stack.Screen
      name="Spontaneous"
      component={Spontaneous}
    />
  </Stack.Navigator>
)

export default MainNavigator;