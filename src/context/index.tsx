import { createContext, useState, useEffect } from "react"

import { api } from "../services/api"
import { searchFilter, dateResolve } from "../utils"
import { ContextProviderProps, ContextProps, DataProps } from "../utils/interfaces"

export const Context = createContext({} as ContextProps)

export default function ContextProvider ({ children } : ContextProviderProps){
	const [ data, setData ] = useState<DataProps[] | undefined>()
	const [ backupData, setBackupData ] = useState([])

	useEffect(() => {
		api.get("/employees")
			.then(res => {
				const json = res.data.map((item : DataProps) => {
					return {
						...item,
						dateIn: dateResolve()
					}
				})
				setData(json)
				setBackupData(json)
			})
	}, [])

	const handleSearch = (search : string) => {
		const arr = [...backupData]
		setData(searchFilter(arr, search))
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