import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import routesRegistry from "../routesRegistry";
import { SignIn } from "@app/screens";

const Stack = createNativeStackNavigator();

export default function Unrestricted() {

    const { SIGN_UP } = routesRegistry;

    return (
        <Stack.Navigator
            initialRouteName={SIGN_UP}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={SIGN_UP}
                component={SignIn}
            />
        </Stack.Navigator>
    )
}