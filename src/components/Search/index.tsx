import { THEME } from "../../theme";

import { Context } from "../../context";
import { useContext } from "react";

import { InputSearch, 
         ContainerSearch, 
         ViewIcon 
} from "./styles";

import { Feather } from "@expo/vector-icons";


export default function Search (){

    const { handleSearch } = useContext(Context);

    return (
        <ContainerSearch>

            <InputSearch 
                    onChangeText={(search : string) => handleSearch(search)} 
                    placeholder="Pesquisar" 
                    maxLength={32} 
            />

            <ViewIcon>
                <Feather name="search" size={24} color={THEME.COLORS.GRAY_10} />
            </ViewIcon>

        </ContainerSearch>
    );
}