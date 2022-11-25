import { LogoBeMobile, ContainerHeader } from "./styles";
import Logo from "../../../assets/bemobile-logo.png";

export default function Header () {
	return (
		<ContainerHeader>
			<LogoBeMobile source={Logo} />
		</ContainerHeader>
	);
}
