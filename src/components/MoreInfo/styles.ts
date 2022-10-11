import styled from "styled-components/native";
import { THEME } from "../../theme";

export const MoreInfoContainer = styled.View`
    margin: 32px 0px 32px 0px;
`;
export const MoreInfoView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 14.5px 16px 14.5px;
    border-bottom-width: 1px;
    border-style: dotted;
    border-color: ${THEME.COLORS.GRAY_10};
`;
export const MoreInfoLabel = styled.Text`
    font-family: ${THEME.FONT_FAMILY.MEDIUM};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
    color: ${THEME.COLORS.BLACK};
`;
export const MoreInfoContent = styled.Text`
    font-family: ${THEME.FONT_FAMILY.REGULAR};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
    color: ${THEME.COLORS.BLACK};
`;