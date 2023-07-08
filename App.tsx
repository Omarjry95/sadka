import 'react-native-gesture-handler';
import * as React from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from "@app/navigation";
import FontsLoader from "@app/utilities/fontsLoader";
import RootView from "@app/utilities/rootView";
import {LogBox} from "react-native";
import {Provider as ReduxProvider} from "react-redux";
import store, { persistor } from "@app/redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {ClickOutsideProvider} from "react-native-click-outside";
import {SafeAreaProvider} from "react-native-safe-area-context";

preventAutoHideAsync();

export default function App() {

    LogBox.ignoreAllLogs();

    return (
        <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
                <FontsLoader>
                    <SafeAreaProvider>
                        <ClickOutsideProvider>
                            <RootView>
                                <Navigation />
                            </RootView>
                        </ClickOutsideProvider>
                    </SafeAreaProvider>
                </FontsLoader>
            </PersistGate>
        </ReduxProvider>
    );
}
