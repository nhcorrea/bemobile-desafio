import { THEME } from "../../theme";
import styled from "styled-components/native";

export const ContainerHeader = styled.View`
    height: 60px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: ${THEME.COLORS.BLACK};
`;

export const LogoBeMobile = styled.Image`
    margin: 0px 0px 0px 20px;
`;