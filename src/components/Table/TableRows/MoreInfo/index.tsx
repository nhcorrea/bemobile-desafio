import { MoreInfoContainer, 
         MoreInfoContent, 
         MoreInfoLabel, 
         MoreInfoRow 
} from "./styles";

import { TelResolve } from "../../../../utils";
import { MoreInfoProps } from "../../../../utils/interfaces";

export default function MoreInfo ( { dateIn, tel, position } : MoreInfoProps  ) {
    return (
        <MoreInfoContainer>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Cargo:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {position}
                    </MoreInfoContent>
                </MoreInfoRow>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Data de admissão:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {dateIn}
                    </MoreInfoContent>
                </MoreInfoRow>

                <MoreInfoRow>
                    <MoreInfoLabel>
                        Telefone:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {TelResolve(tel)}
                    </MoreInfoContent>
                </MoreInfoRow>
                
        </MoreInfoContainer>
    )
}