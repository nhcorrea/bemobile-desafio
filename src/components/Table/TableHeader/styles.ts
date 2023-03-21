import styled from "styled-components/native"

export const Container = styled.View`
    margin: 0px 20px 0px 20px;
    box-shadow: ${prop => prop.theme.BOX_SHADOW.SHADOW_1};
`
export const ContainerTable = styled.View`
    padding: 14px 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background-color: ${prop => prop.theme.COLORS.BLUE_PRIMARY};
`
export const ContentTable = styled.View`
    margin: 0px 14.5px 0px 14.5px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
export const Ellipse = styled.View`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${prop => prop.theme.COLORS.WHITE};
    margin-right: 12px;
`
export const Label = styled.Text`
    color: ${prop => prop.theme.COLORS.WHITE};
    font-family: ${prop => prop.theme.FONT_FAMILY.MEDIUM};
    font-size: ${prop => prop.theme.FONT_SIZE.HEADING_2_AND_3};
`