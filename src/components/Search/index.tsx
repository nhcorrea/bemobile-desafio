import { THEME } from "../../theme";
import { InputSearch, 
         ViewSearch, 
         ViewIcon 
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { useContext } from "react";

import { Context } from "../../context";

export default function Search (){

    const { handleSearch } = useContext(Context)

    return (
        <ViewSearch>
            <InputSearch onChangeText={(search : string) => handleSearch(search)} placeholder="Pesquisar" maxLength={32} />
            <ViewIcon>
                <Feather name="search" size={24} color={THEME.COLORS.GRAY_10} />
            </ViewIcon>
        </ViewSearch>
    );
}