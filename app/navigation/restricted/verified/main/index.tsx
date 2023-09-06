import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import {Homepage, Spontaneous} from "@app/screens";
import Header from "@app/screens/homepage/header";

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
        header: () => (
          <Header navigation={navigation} />
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