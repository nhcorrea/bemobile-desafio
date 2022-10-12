import { THEME } from "../../../../theme";
import { CardEmployee, 
         ImageEmployee, 
         NameEmployee, 
         ContainerEmployee 
} from "./styles";

import { useState } from "react";
import { Feather } from "@expo/vector-icons"; 
import * as Animatable from "react-native-animatable";

import MoreInfo from "../MoreInfo";
import { EmployeeProps } from "../../../../utils/interfaces";

export default function Employee ({ data } : EmployeeProps) {

    const [ isPressed, setIsPressed ] = useState(false);
    const handleTouch = () => setIsPressed(!isPressed)

    return (
            <ContainerEmployee>

                    <CardEmployee
                        activeOpacity={0.7}
                        onPress={handleTouch}
                    >

                        <ImageEmployee 
                                source={{ uri: data.image}} 
                        />

                        <NameEmployee>
                            {data.name}
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
                                    <MoreInfo dateIn={data.dateIn} tel={data.tel} position={data.position} />
                            </Animatable.View>
                    }
                    

            </ContainerEmployee>
    )
}