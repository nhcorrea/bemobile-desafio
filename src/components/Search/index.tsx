import { Feather } from "@expo/vector-icons"
import { useContext } from "react"

import { THEME } from "../../theme"
import { Context } from "../../context"
import { InputToSearch, Container, ViewIcon } from "./styles"

export default function Search (){
	const { handleSearch } = useContext(Context)

	return (
		<Container>
			<InputToSearch
				onChangeText={(search : string) => handleSearch(search)}
				placeholder="Pesquisar"
				maxLength={32}
			/>
			<ViewIcon>
				<Feather name="search" size={24} color={THEME.COLORS.GRAY_10} />
			</ViewIcon>
		</Container>
	)
}