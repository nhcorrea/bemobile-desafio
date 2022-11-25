import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { THEME } from "../../../../theme";
import MoreInfo from "../MoreInfo";
import { RenderItemProps } from "../../../../utils/interfaces";
import {
	CardEmployee,
	AvatarEmployee,
	NameEmployee,
	ContainerEmployee
} from "./styles";

export default function Employee ({ item } : RenderItemProps) {
	const [ isPressed, setIsPressed ] = useState(false);
	const {
		dateIn,
		position,
		tel,
		name,
		image
	} = item;
	const handleTouch = () => setIsPressed(!isPressed);

	return (
		<ContainerEmployee>
			<CardEmployee
				activeOpacity={0.7}
				onPress={handleTouch}
			>
				<AvatarEmployee
					source={{ uri: image}}
				/>

				<NameEmployee>
					{name}
				</NameEmployee>

				<Feather
					name={isPressed ? "chevron-up" : "chevron-down"}
					size={32}
					color={THEME.COLORS.BLUE_PRIMARY}
				/>
			</CardEmployee>

			{isPressed &&
				<Animatable.View
					animation="fadeIn"
					duration={800}
				>
					<MoreInfo info={{ dateIn, position, tel }} />
				</Animatable.View>
			}
		</ContainerEmployee>
	);
}