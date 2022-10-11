import { TableList } from './styles'
import { dataProps } from '../../context/context'
import Employee from '../Employee'
import { useContext } from 'react'
import { Context } from '../../context/context'

interface ItemProps {
    item : dataProps
}
export default function TableRows () {

    const { data } = useContext(Context);

    return (
            <TableList
                    data={data}
                    keyExtractor={(data : dataProps) => data.name}
                    renderItem={ ({item} : ItemProps) => <Employee data={item} />}
            />
    )
}