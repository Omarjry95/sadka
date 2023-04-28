import * as React from 'react';
import { preventAutoHideAsync } from 'expo-splash-screen';
import Navigation from "@app/navigation";
import FontsLoader from "@app/utilities/fontsLoader";

preventAutoHideAsync();

export default function App() {

  return (
      <FontsLoader>
        <Navigation />
      </FontsLoader>
  );
}
