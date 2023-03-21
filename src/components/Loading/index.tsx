import { ActivityIndicator } from "react-native"

import { THEME } from "../../theme"
import { Container } from "./styles"

export default function Loading (){
	return (
		<Container>
			<ActivityIndicator size={40} color={THEME.COLORS.BLUE_PRIMARY}/>
		</Container>
	)
}