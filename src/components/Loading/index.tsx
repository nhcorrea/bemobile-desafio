import { THEME } from "../../theme";
import { ViewLoading } from "./styles";

import { ActivityIndicator } from "react-native";

export default function Loading (){
    return (
        <ViewLoading>
            <ActivityIndicator size={40} color={THEME.COLORS.BLUE_PRIMARY}/>
        </ViewLoading>
    );
}