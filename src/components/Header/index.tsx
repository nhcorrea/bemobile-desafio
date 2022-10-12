import { LogoBeMobile, 
         ViewHeader 
} from "./styles";

import Logo from "../../../assets/icons/logo.png";

export default function Header () {
    return (
        <ViewHeader>
            <LogoBeMobile source={Logo} />
        </ViewHeader>
    );
}
