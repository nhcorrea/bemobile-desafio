import { ActivityIndicator } from "react-native";

import { THEME } from "../../theme";
import { ContainerLoading } from "./styles";

export default function Loading (){
	return (
		<ContainerLoading>
			<ActivityIndicator size={40} color={THEME.COLORS.BLUE_PRIMARY}/>
		</ContainerLoading>
	);
}