import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Unrestricted from "./unrestricted";
import mainTheme from "@app/theme";
import Loader from "@app/reusable/loader";
import {useSelector} from "react-redux";
import {globalSelector} from "@app/global/globalSlice";
import {Dialog} from "@app/reusable";

export default function Navigation() {

    const { isLoading, modalProps } = useSelector(globalSelector);

    return (
        <NavigationContainer theme={mainTheme}>
            {isLoading && (<Loader />)}

            {modalProps && (<Dialog {...modalProps} />)}

            <Unrestricted />
        </NavigationContainer>
    )
}