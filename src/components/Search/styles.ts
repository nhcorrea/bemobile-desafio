import styled from "styled-components/native"

export const Container = styled.View`
    margin-bottom: 20px;
`
export const InputToSearch = styled.TextInput`
    margin: 0px 20px 0px 20px;
    padding: 12px 16px;
    border-radius: 4px;
    box-shadow: ${prop => prop.theme.BOX_SHADOW.SHADOW_1};
    background-color: ${prop => prop.theme.COLORS.WHITE};
`
export const ViewIcon = styled.View`
    position: absolute;
    right: 32px;
    top: 12px;
`