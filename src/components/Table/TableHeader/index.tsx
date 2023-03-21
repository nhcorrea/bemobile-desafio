import {
	Container,
	ContainerTable,
	Ellipse,
	Label,
	ContentTable
} from "./styles"

export default function TableHeader () {
	return (
		<Container>
			<ContainerTable>
				<ContentTable>
					<Label>FOTO</Label>
					<Label>NOME</Label>
					<Ellipse />
				</ContentTable>
			</ContainerTable>
		</Container>
	)
}
