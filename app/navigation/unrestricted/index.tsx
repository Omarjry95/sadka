import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import routesRegistry from "../routesRegistry";
import Showcase from "@app/screens/showcase";

const Stack = createNativeStackNavigator();

export default function Unrestricted() {

    const { SIGN_UP } = routesRegistry;

    return (
        <Stack.Navigator initialRouteName={SIGN_UP}>
            <Stack.Screen
                name={SIGN_UP}
                component={Showcase}
            />
        </Stack.Navigator>
    )
}