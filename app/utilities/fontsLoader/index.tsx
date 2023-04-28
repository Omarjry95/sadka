import React, {Fragment, PropsWithChildren, useEffect, useState} from 'react';
import { useFonts } from "expo-font";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import { Merriweather_700Bold } from "@expo-google-fonts/merriweather";
import { hideAsync } from 'expo-splash-screen';

export default function FontsLoader({ children }: PropsWithChildren) {

    const [areFontsReady, setFontsReady] = useState<boolean>(false);

    let [fontsLoaded] = useFonts({
        MerriweatherBold: Merriweather_700Bold,
        OpenSans: OpenSans_400Regular
    });

    useEffect(() => {
        if (fontsLoaded) {
            hideAsync()
                .then(() => setFontsReady(true));
        }
    }, [fontsLoaded]);

    return (
        <Fragment>
            {areFontsReady ? children : null}
        </Fragment>
    );
}