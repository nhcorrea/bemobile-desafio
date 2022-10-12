import { ViewContainer, 
         ViewTableHeader, 
         Ellipse, 
         HeaderText, 
         TableHeaderContent 
} from "./styles";

export default function TableHeader () {
    return (
            <ViewContainer>
                        <ViewTableHeader>
                            <TableHeaderContent>

                                <HeaderText>
                                        FOTO
                                </HeaderText>
                                <HeaderText>
                                        NOME
                                </HeaderText>
                                <Ellipse />

                            </TableHeaderContent>
                        </ViewTableHeader>
            </ViewContainer>    
    );
}
