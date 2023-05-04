import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Unrestricted from "./unrestricted";
import mainTheme from "@app/theme";
import Loader from "@app/reusable/loader";
import {useSelector} from "react-redux";
import {globalSelector} from "@app/global/globalSlice";

export default function Navigation() {

    const { isLoading } = useSelector(globalSelector);

    return (
        <NavigationContainer theme={mainTheme}>
            {isLoading && (<Loader />)}

            <Unrestricted />
        </NavigationContainer>
    )
}