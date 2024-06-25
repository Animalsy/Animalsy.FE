import styled from 'styled-components';

export const PetContainer = styled.div<{ vertical?: boolean }>`
    display: flex;
    overflow-y: auto;
    padding:  1rem;
    flex-direction: ${(props) => (props.vertical ? "column" : "row")};
    align-items: ${(props) => (props.vertical ? "center" : "center")};
    gap: 1rem;

`;