import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import Unrestricted from "./unrestricted";

export default function Navigation() {

    return (
        <NavigationContainer>
            <Unrestricted />
        </NavigationContainer>
    )
}