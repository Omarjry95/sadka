import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {UnverifiedStackParamList} from "@app/navigation/models";
import {Lobby} from "@app/screens";

const Stack = createNativeStackNavigator<UnverifiedStackParamList>();

export default function Unverified() {

    return (
        <Stack.Navigator
            initialRouteName="Lobby"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Lobby"
                component={Lobby}
            />
        </Stack.Navigator>
    )
}