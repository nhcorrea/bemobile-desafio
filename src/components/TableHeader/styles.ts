import styled from "styled-components/native";
import { THEME } from "../../theme";

export const ViewContainer = styled.View`
    margin: 0px 20px 0px 20px;
    box-shadow: ${THEME.BOX_SHADOW.SHADOW_1};
`;

export const ViewTableHeader = styled.View`
    background-color: ${THEME.COLORS.BLUE_PRIMARY};
    padding: 14px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;
export const TableHeaderContent = styled.View`
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
    margin-right: 13.5px;
`;
export const HeaderText = styled.Text`
    color: ${THEME.COLORS.WHITE};
    font-family: ${THEME.FONT_FAMILY.MEDIUM};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
`;