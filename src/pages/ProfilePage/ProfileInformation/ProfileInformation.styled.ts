import styled from 'styled-components';
import AppSizes from '../../../static/sizes';
export const Container = styled.div`
position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    padding: .5rem;

    @media (min-width: ${AppSizes.breakpoints.xSmall}px) {
        padding:1rem;
        max-width: 100%;
        margin: 0;
        
    }
    @media (min-width: ${AppSizes.breakpoints.small}px) {
        padding: 1rem 2rem;
        max-width: 70%;
        margin: 2rem;
        
    }
    @media (min-width: ${AppSizes.breakpoints.large}px) {
        padding: 1rem 2rem;
        max-width: 40%;
    }

`;