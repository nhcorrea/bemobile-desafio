import { THEME } from "./src/theme";

import ContextProvider from "./src/context";

import Loading from "./src/components/Loading";
import Home from "./src/screen/Home";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";

export default function App() { 

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });

  return (
      <SafeAreaView>
        <ContextProvider>
          { fontsLoaded ? <Home /> : <Loading /> }
          <StatusBar style="light" backgroundColor={THEME.COLORS.BLACK} />
        </ContextProvider>
      </SafeAreaView>
  );
}