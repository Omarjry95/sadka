import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RestrictedStackParamList} from "@app/navigation/models";
import {useTheme} from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DrawerLabel } from "@app/reusable/complex";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ProfileNavigator from "@app/navigation/restricted/verified/profile";
import MainNavigator from "@app/navigation/restricted/verified/main";

const Drawer = createDrawerNavigator<RestrictedStackParamList>();

export default function Verified() {

    const { colors } = useTheme();

    return (
        <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTransparent: true,
                title: "",
                drawerActiveTintColor: colors.primary
            }}
        >
          <Drawer.Screen
            name="Main"
            component={MainNavigator}
            options={{
              headerShown: false,
              drawerLabel: () => (
                <DrawerLabel label="Accueil" />
              ),
              drawerIcon: () => (
                <FontAwesome
                  name="home"
                  color="black"
                  size={24}
                />
              )
            }}
          />

          <Drawer.Screen
            name="Profile"
            component={ProfileNavigator}
            options={{
              headerShown: false,
              drawerLabel: () => <DrawerLabel label="Profil" />,
              drawerIcon: () => (
                <FontAwesome5
                  name="user-alt"
                  color="black"
                  size={22}
                />
              )
            }}
          />
        </Drawer.Navigator>
    )
}