import styled from "styled-components/native"

export const Container = styled.View`
    margin: 32px 0px 32px 0px;
`
export const MoreInfoRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 14.5px 16px 14.5px;
    border-bottom-width: 1px;
    border-style: dotted;
    border-color: ${prop => prop.theme.COLORS.GRAY_10};
`
export const MoreInfoLabel = styled.Text`
    color: ${prop => prop.theme.COLORS.BLACK};
    font-size: ${prop => prop.theme.FONT_SIZE.HEADING_2_AND_3};
    font-family: ${prop => prop.theme.FONT_FAMILY.MEDIUM};
`
export const MoreInfoContent = styled.Text`
    color: ${prop => prop.theme.COLORS.BLACK};
    font-size: ${prop => prop.theme.FONT_SIZE.HEADING_2_AND_3};
    font-family: ${prop => prop.theme.FONT_FAMILY.REGULAR};
`