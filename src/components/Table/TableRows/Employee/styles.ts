import styled from "styled-components/native"

export const Container = styled.View`
    margin: 0px 20px 1px 20px;
    background-color: ${prop => prop.theme.COLORS.WHITE};
`
export const CardEmployee = styled.TouchableOpacity`
    min-height: 60px;
    margin: 0px 14.5px 0px 14.5px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${prop => prop.theme.COLORS.WHITE};
`
export const AvatarEmployee = styled.Image`
    width: 34px;
    height: 34px;
    border-radius: 17px;
`
export const NameEmployee = styled.Text`
    color: ${prop => prop.theme.COLORS.BLACK};
    font-size: ${prop => prop.theme.FONT_SIZE.HEADING_2_AND_3};
    font-family: ${prop => prop.theme.FONT_FAMILY.REGULAR};
`