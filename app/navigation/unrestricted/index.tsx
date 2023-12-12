import * as React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignIn, SignUp} from "@app/screens";
import { UnrestrictedStackParamList } from "../models";

const Stack = createNativeStackNavigator<UnrestrictedStackParamList>();

export default function Unrestricted() {

    return (
        <Stack.Navigator
            key="UnrestrictedNavigator"
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="SignIn"
                component={SignIn}
            />

            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: true,
                    title: "",
                    headerTransparent: true
                }}
            />
        </Stack.Navigator>
    )
}