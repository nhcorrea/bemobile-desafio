import { ActivityIndicator } from "react-native"
import { ViewLoading } from "./styles";
import { THEME } from "../../theme";

export default function Loading (){
    return (
        <ViewLoading>
            <ActivityIndicator size={40} color={THEME.COLORS.BLUE_PRIMARY}/>
        </ViewLoading>
    );
}