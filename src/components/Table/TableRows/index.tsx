import { useContext } from "react";
import { FlatList } from "react-native";

import Employee from "./Employee";

import { Context } from "../../../context";
import { RenderItemProps, 
         DataProps 
} from "../../../utils/interfaces";

export default function TableRows () {

    const { data } = useContext(Context);

    return (
            <FlatList
                    data={data}
                    keyExtractor={(data : DataProps) => data.name}
                    renderItem={ ({ item } : RenderItemProps) => <Employee item={item} />}
            />
    )
}