import { THEME } from "../../theme";

import { ContainerLoading } from "./styles";

import { ActivityIndicator } from "react-native";

export default function Loading (){
    return (
        <ContainerLoading>
            <ActivityIndicator size={40} color={THEME.COLORS.BLUE_PRIMARY}/>
        </ContainerLoading>
    );
}