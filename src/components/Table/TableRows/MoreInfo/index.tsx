import { TelResolve } from "../../../../utils";
import { MoreInfoProps } from "../../../../utils/interfaces";

import { ContainerMoreInfo, 
         MoreInfoContent, 
         MoreInfoLabel, 
         MoreInfoRow 
} from "./styles";

export default function MoreInfo ( { info } : MoreInfoProps ) {
    return (
        <ContainerMoreInfo>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Cargo:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {info.position}
                    </MoreInfoContent>
                </MoreInfoRow>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Data de admissão:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {info.dateIn}
                    </MoreInfoContent>
                </MoreInfoRow>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Telefone:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {TelResolve(info.tel)}
                    </MoreInfoContent>
                </MoreInfoRow>
                
        </ContainerMoreInfo>
    )
}