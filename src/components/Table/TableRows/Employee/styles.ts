import { THEME } from "../../../../theme";
import styled from "styled-components/native";

export const ContainerEmployee = styled.View`
    margin: 0px 20px 1px 20px;
    background-color: ${THEME.COLORS.WHITE};
`;
export const CardEmployee = styled.TouchableOpacity`
    min-height: 60px;
    margin: 0px 14.5px 0px 14.5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${THEME.COLORS.WHITE};
`;
export const AvatarEmployee = styled.Image`
    width: 34px;
    height: 34px;
    border-radius: 17px;
`;
export const NameEmployee = styled.Text`
    color: ${THEME.COLORS.BLACK};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
`;