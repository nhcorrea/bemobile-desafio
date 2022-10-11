import { CardEmployee, ImageEmployee, NameEmployee, ContainerEmployee } from "./styles"
import { dataProps } from "../../context/context";
import { useContext, useState } from "react";
import { Feather } from '@expo/vector-icons'; 
import MoreInfo from "../MoreInfo";
import { THEME } from "../../theme";
import * as Animatable from 'react-native-animatable'

interface Props {
    data : dataProps
}

export default function Employee ({data} : Props) {

    const [ clicked, setClicked ] = useState(false);
    const handleTouch = () => setClicked(!clicked);

    return (
            <ContainerEmployee>

                    <CardEmployee
                        activeOpacity={0.7}
                        onPress={handleTouch}
                    >
                        <ImageEmployee source={{
                            uri: data.image
                        }} />
                        <NameEmployee>
                            {data.name}
                        </NameEmployee>
                        <Feather name={clicked ? "chevron-up" : "chevron-down"} size={32} color={THEME.COLORS.BLUE_PRIMARY}/>
                    </CardEmployee>

                    <Animatable.View 
                        animation={clicked ? "fadeIn" : ""}
                        duration={300}
                    >
                        {clicked && <MoreInfo dateIn={data.dateIn} tel={data.tel} position={data.position}/>} 
                    </Animatable.View>

            </ContainerEmployee>
    )
}