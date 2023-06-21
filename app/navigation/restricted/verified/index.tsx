import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RestrictedStackParamList} from "@app/navigation/models";
import {Homepage} from "@app/screens";

const Stack = createNativeStackNavigator<RestrictedStackParamList>();

export default function Verified() {

    return (
        <Stack.Navigator
            initialRouteName="Homepage"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Homepage"
                component={Homepage}
            />
        </Stack.Navigator>
    )
}