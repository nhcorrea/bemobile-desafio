import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
} from "@expo-google-fonts/roboto";

import { THEME } from "./src/theme";
import ContextProvider from "./src/context";
import Loading from "./src/components/Loading";
import Home from "./src/screen/Home";

export default function App() {

	const [ fontsLoaded ] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium
	});

	return (
		<SafeAreaView>
			<ContextProvider>
				<ThemeProvider theme={THEME}>
					{ fontsLoaded ? <Home /> : <Loading /> }
					<StatusBar style="light" backgroundColor={THEME.COLORS.BLACK} />
				</ThemeProvider>
			</ContextProvider>
		</SafeAreaView>
	);
}