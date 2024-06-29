import styled from 'styled-components';
import AppSizes from '../../../static/sizes';

export const VendorContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primaryDarkO};
  margin: .4rem;
  padding: 1rem 2rem;
  border-radius: .2rem;
  justify-content: space-around;
  cursor: pointer;
  position: relative;

    @media (max-width: ${AppSizes.breakpoints.medium}px) {
        padding: 1rem;
    }

    @media (max-width: ${AppSizes.breakpoints.small}px) {
        padding: .5rem;
    }
`;

export const VendorGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: .2rem;
    margin: 1rem;

   
  
`;