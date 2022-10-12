import { ContainerTableHeader, 
         BoxTableHeader, 
         Ellipse, 
         HeaderText, 
         BoxHeaderContent 
} from "./styles";

export default function TableHeader () {
    return (
            <ContainerTableHeader>
                        <BoxTableHeader>
                            <BoxHeaderContent>

                                <HeaderText>
                                        FOTO
                                </HeaderText>
                                <HeaderText>
                                        NOME
                                </HeaderText>
                                <Ellipse />

                            </BoxHeaderContent>
                        </BoxTableHeader>
            </ContainerTableHeader>    
    );
}
