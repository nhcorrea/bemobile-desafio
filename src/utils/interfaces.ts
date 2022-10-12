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
export interface RenderItemProps {
    item : DataProps;
}
export interface EmployeeProps {
    data : DataProps;
}
export interface ContextProps {
    data: DataProps[] | undefined;
    handleSearch: (search: string) => void;
}
export interface MoreInfoProps {
    info: {
        dateIn: string;
        tel: string;
        position: string;
    }
}