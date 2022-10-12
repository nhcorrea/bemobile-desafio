import { THEME } from "../../../../theme";
import { RenderItemProps } from "../../../../utils/interfaces";

import { CardEmployee, 
         AvatarEmployee, 
         NameEmployee, 
         ContainerEmployee 
} from "./styles";
import MoreInfo from "../MoreInfo";

import { useState } from "react";
import { Feather } from "@expo/vector-icons"; 
import * as Animatable from "react-native-animatable";

export default function Employee ({ item } : RenderItemProps) {

    const [ isPressed, setIsPressed ] = useState(false);
    const handleTouch = () => setIsPressed(!isPressed);
    const { dateIn, position, tel } = item;

    return (
            <ContainerEmployee>

                    <CardEmployee
                        activeOpacity={0.7}
                        onPress={handleTouch}
                    >

                        <AvatarEmployee 
                                source={{ uri: item.image}} 
                        />

                        <NameEmployee>
                            {item.name}
                        </NameEmployee>

                        <Feather 
                                name={isPressed ? "chevron-up" : "chevron-down"} 
                                size={32} 
                                color={THEME.COLORS.BLUE_PRIMARY}
                        />

                    </CardEmployee>
                    
                    { isPressed && 
                            <Animatable.View 
                                    animation="fadeIn"
                                    duration={800}
                            >
                                    <MoreInfo info={{ dateIn, position, tel }} />
                            </Animatable.View>
                    }

            </ContainerEmployee>
    )
}