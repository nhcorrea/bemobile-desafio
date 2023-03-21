import { telResolve } from "../../../../utils"
import { MoreInfoProps } from "../../../../utils/interfaces"
import {
	Container,
	MoreInfoContent,
	MoreInfoLabel,
	MoreInfoRow
} from "./styles"

export default function MoreInfo ( { info } : MoreInfoProps ) {

	const { position, dateIn, tel } = info
	return (
		<Container>
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
					{telResolve(tel)}
				</MoreInfoContent>
			</MoreInfoRow>
		</Container>
	)
}