import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import {Homepage, Donation} from "@app/screens";
import Header from "@app/screens/homepage/header";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <Stack.Navigator
    key="MainNavigator"
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
        header: () => (
          <Header navigation={navigation} />
        )
      })}
    />

    <Stack.Screen
      name="Donation"
      component={Donation}
    />
  </Stack.Navigator>
)

export default MainNavigator;