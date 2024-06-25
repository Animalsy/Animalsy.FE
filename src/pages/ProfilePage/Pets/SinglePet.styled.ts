import { Card } from '@mui/material';
import styled from 'styled-components';

export const SinglePetContainer = styled(Card)`
  padding: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  max-width: 5rem;
  min-width: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PetImage = styled.img`
   width: 3rem;
    height: 3rem;
    border-radius: 50%;
    object-fit: contain;
`;