import {MoreInfoContainer, MoreInfoContent, MoreInfoLabel, MoreInfoView} from './styles'
import { TelResolve } from '../../utils'

interface MoreInfoProps {
    dateIn: string;
    tel: string;
    position: string
}

export default function MoreInfo ( { dateIn, tel, position } : MoreInfoProps  ) {
    return (
        <MoreInfoContainer>
                <MoreInfoView>
                    <MoreInfoLabel>
                        Cargo:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {position}
                    </MoreInfoContent>
                </MoreInfoView>

                <MoreInfoView>
                    <MoreInfoLabel>
                        Data de admissão:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {dateIn}
                    </MoreInfoContent>
                </MoreInfoView>

                <MoreInfoView>
                    <MoreInfoLabel>
                        Telefone:
                    </MoreInfoLabel>
                    <MoreInfoContent>
                        {TelResolve(tel)}
                    </MoreInfoContent>
                </MoreInfoView>
        </MoreInfoContainer>
    )
}