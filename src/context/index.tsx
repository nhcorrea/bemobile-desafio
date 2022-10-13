import { api } from "../services/api";
import { SearchFilter, DateResolve } from "../utils"
import { ContextProviderProps, ContextProps, DataProps } from "../utils/interfaces";

import { createContext, useState, useEffect } from "react";

export const Context = createContext({} as ContextProps);

export default function ContextProvider ({ children } : ContextProviderProps){

    const [ data, setData ] = useState<DataProps[] | undefined>();
    const [ backupData, setBackupData ] = useState([]);

    useEffect(() => {
        
        api.get("/employees").then(response => {

            const json = response.data.map((item : DataProps) => {
                return {
                    ...item,
                    dateIn: DateResolve()
                }
            });

            setData(json);
            setBackupData(json);
        });
        
    }, []);

    //Search
    const handleSearch = (search : string) => {
        let arr = [...backupData];
        setData(SearchFilter(arr, search));
    }
    
    return (
        <Context.Provider 
            value={{
                data,
                handleSearch
            }}
        >
            {children}
        </Context.Provider>
    )
}