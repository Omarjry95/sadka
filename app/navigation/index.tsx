import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Unrestricted from "./unrestricted";
import mainTheme from "@app/theme";
import Loader from "@app/utilities/loader";

export default function Navigation() {

    return (
        <NavigationContainer theme={mainTheme}>
            <Loader />

            <Unrestricted />
        </NavigationContainer>
    )
}