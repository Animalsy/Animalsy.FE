import { createGlobalStyle } from "styled-components";
import AppSizes from "../static/sizes";

export const GlobalStyle = createGlobalStyle`


&:root{
    background-color: ${(props) => props.theme.colors.background};
    @media (min-width: ${AppSizes.breakpoints.small}) {
        font-size: 1rem;
    }
    @media (min-width: ${AppSizes.breakpoints.medium}) {
        font-size: 1.2rem;
    }
    @media (min-width: ${AppSizes.breakpoints.large}) {
        font-size: 1.4rem;
    }
    @media (min-width: ${AppSizes.breakpoints.extraLarge}) {
        font-size: 1.6rem;
    }
}
 `;
