import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import routesRegistry from "../routesRegistry";
import {SignIn, SignUp} from "@app/screens";

const Stack = createNativeStackNavigator();

export default function Unrestricted() {

    const { SIGN_UP, SIGN_IN } = routesRegistry;

    return (
        <Stack.Navigator
            initialRouteName={SIGN_IN}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name={SIGN_IN}
                component={SignIn}
            />

            <Stack.Screen
                name={SIGN_UP}
                component={SignUp}
            />
        </Stack.Navigator>
    )
}