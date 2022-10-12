export interface ContextProviderProps {
    children: React.ReactNode;
}
export interface DataProps {
    id: string;
    name: string;
    image: string;
    dateIn: string;
    position: string;
    tel: string;
}
export interface ItemProps {
    item : DataProps;
}
export interface EmployeeProps {
    data : DataProps;
}
export interface ContextProps {
    data: DataProps[] | undefined;
    backupData: DataProps[] | undefined;
    setData: (newState: DataProps[]) => void;
    setBackupData: (newState: []) => void;
    handleSearch: (search: string) => void;
}
export interface MoreInfoProps {
    dateIn: string;
    tel: string;
    position: string;
}