import styled from "styled-components/native";

export const ContainerHeader = styled.View`
    height: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${prop => prop.theme.COLORS.BLACK};
`;
export const LogoBeMobile = styled.Image`
    margin: 0px 0px 0px 20px;
`;