import { LogoBeMobile, Container } from "./styles"
import Logo from "../../../assets/bemobile-logo.png"

export default function Header () {
	return (
		<Container>
			<LogoBeMobile source={Logo} />
		</Container>
	)
}
