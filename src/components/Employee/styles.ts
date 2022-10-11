import styled from "styled-components/native";
import { THEME } from "../../theme";

export const ContainerEmployee = styled.View`
    margin: 0px 20px 0px 20px;  
    margin-bottom: 1px;
    background-color: ${THEME.COLORS.WHITE};
    
`;
export const CardEmployee = styled.TouchableOpacity`
    min-height: 60px;
    background-color: ${THEME.COLORS.WHITE};
    border-bottom: 1px solid ${THEME.COLORS.GRAY_20};
    margin: 0px 14.5px 0px 14.5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const ImageEmployee = styled.Image`
    width: 34px;
    height: 34px;
    border-radius: 17px;
`;
export const NameEmployee = styled.Text`
    color: ${THEME.COLORS.BLACK};
    font-family: ${THEME.FONT_FAMILY.REGULAR};
    font-size: ${THEME.FONT_SIZE.HEADING_2_AND_3};
`;
export const Arrow = styled.Image`
    width: 17px;
    height: 9px;
`;
