import styled from "styled-components";

export const Image = styled.div`
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.antiqueBronze};
    border-radius: 5px;
    width: 80%;
    max-width: 80%;
    margin: auto;
   
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 80%;
        max-width: 80%;
        margin: auto;
    }
`

export const ImageList = styled.img`
    padding: 5px;
    display: flex;
    justify-content: center;
    max-width: 80%;
    margin: auto;
   
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 80%;
        max-width: 80%;
        margin: auto;
    }
`