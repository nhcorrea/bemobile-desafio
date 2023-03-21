import styled from "styled-components/native"

export const Container = styled.View`
    height: 74px;
    justify-content: center;
`
export const Title = styled.Text`
    font-family: ${prop => prop.theme.FONT_FAMILY.MEDIUM};
    font-size: ${prop => prop.theme.FONT_SIZE.HEADING_1};
    margin: 0px 0px 0px 20px;
`