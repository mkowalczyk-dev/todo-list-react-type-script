import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    margin: 15px 0;
    box-shadow: 15px 15px 15px 15px ${({ theme }) => theme.colors.twine};;
    font-size: 25px;
`

export const SectionGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    grid-gap: 20px;
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        padding: 5px;
        grid-template-columns: 1fr;
    }
`
export const SectionTitle = styled.div`
    padding: 0;
    font-weight: bold;
    font-size: 25px;
`
