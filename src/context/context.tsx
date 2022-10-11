import { createContext, useState, useEffect } from "react";
import { api } from '../services/api';
import { SearchFilter, DataResolve } from '../utils/'

interface ContextProviderProps {
    children: React.ReactNode;
}
export interface dataProps {
    id: string;
    name: string;
    image: string;
    dateIn: string;
    position: string;
    tel: string;
}
interface ContextProps {
    data: dataProps[] | undefined;
    setData: (newState: dataProps[]) => void;
    backupData: dataProps[] | undefined;
    setBackupData: (newState: []) => void;
    clicked: boolean;
    setClicked: (newState: boolean) => void;
    handleSearch: (search: string) => void
}
export const Context = createContext<ContextProps>({} as ContextProps)

export default function ContextProvider ({children} : ContextProviderProps){

    const [ data, setData ] = useState<dataProps[] | undefined>();
    const [ backupData, setBackupData ] = useState([]);
    const [ clicked, setClicked ] = useState(false);

    useEffect(() => {
        api.get('/employees').then(response => {
            const json = response.data.map((element : dataProps) => {
                return {
                    ...element,
                    dateIn: DataResolve()
                }
            })
            setData(json);
            setBackupData(json);
        })
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
            clicked,
            backupData,
            setClicked,
            setData,
            setBackupData,
            handleSearch
        }}
        
        >
            {children}
        </Context.Provider>
    )
}