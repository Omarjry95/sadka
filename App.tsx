import * as React from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from "@app/navigation";
import FontsLoader from "@app/utilities/fontsLoader";
import RootView from "@app/utilities/rootView";
import {LogBox} from "react-native";
import {Provider as ReduxProvider} from "react-redux";
import store, { persistor } from "@app/redux/store";
import {PersistGate} from "redux-persist/integration/react";

preventAutoHideAsync();

export default function App() {

    LogBox.ignoreAllLogs();

    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
            <FontsLoader>
                <RootView>
                    <Navigation />
                </RootView>
            </FontsLoader>
            </PersistGate>
        </ReduxProvider>
    );
}
