import { LogoBeMobile, 
         ContainerHeader 
} from "./styles";

import Logo from "../../../assets/logo.png";

export default function Header () {
    return (
        <ContainerHeader>
            <LogoBeMobile source={Logo} />
        </ContainerHeader>
    );
}
