import { THEME } from "../../theme";
import styled from "styled-components/native";

export const ContainerSearch = styled.View`
    margin-bottom: 20px;
`;

export const InputSearch = styled.TextInput`
    margin: 0px 20px 0px 20px;
    padding: 12px 16px;
    border-radius: 4px;
    box-shadow: ${THEME.BOX_SHADOW.SHADOW_1};
    background-color: ${THEME.COLORS.WHITE};
`;

export const ViewIcon = styled.View`
    position: absolute;
    right: 32px;
    top: 12px;
`;