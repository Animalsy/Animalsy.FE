import { createGlobalStyle } from "styled-components";
import AppSizes from "../static/sizes";

export const GlobalStyle = createGlobalStyle`


&:root{

    @media (max-width: ${AppSizes.breakpoints.small}) {
        font-size: 1rem;
    }
    @media (max-width: ${AppSizes.breakpoints.medium}) {
        font-size: 1.2rem;
    }
    @media (max-width: ${AppSizes.breakpoints.large}) {
        font-size: 1.4rem;
    }
    @media (max-width: ${AppSizes.breakpoints.extraLarge}) {
        font-size: 1.6rem;
    }
}
 `;
