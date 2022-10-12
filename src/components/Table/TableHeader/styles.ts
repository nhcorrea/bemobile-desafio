import { THEME } from "../../../theme";
import styled from "styled-components/native";

export const ContainerTableHeader = styled.View`
    margin: 0px 20px 0px 20px;
    box-shadow: ${THEME.BOX_SHADOW.SHADOW_1};
`;

export const BoxTableHeader = styled.View`
    padding: 14px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${THEME.COLORS.BLUE_PRIMARY};
`;

export const BoxHeaderContent = styled.View`
    margin: 0px 14.5px 0px 14.5px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Ellipse = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${THEME.COLORS.WHITE};
    margin-right: 12px;
`;

export const HeaderText = styled.Text`
    color: ${THEME.COLORS.WHITE};
    font-family: ${THEME.FONT_FAMILY.MEDIUM};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
`;