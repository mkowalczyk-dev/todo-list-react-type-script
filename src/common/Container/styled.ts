import styled from "styled-components";

export const StyledContainer = styled.main`
    margin: auto;
    padding: 20px;
    max-width: 900px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font: 25px / 2 'Oswald', sans-serif;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin: 20px ;
    }
`