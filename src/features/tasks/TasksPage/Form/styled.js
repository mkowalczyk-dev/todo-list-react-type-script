import styled from "styled-components";

export const FormField = styled.input`
    color: ${({ theme }) => theme.colors.black};
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.antiqueBronze};
    border-radius: 5px;
    width: 80%;
    max-width: 80%;
    margin: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 100%;
        max-width: 100%;
        margin: auto;
    }
`
export const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color:${({ theme }) => theme.colors.teal};
    border: none;
    padding: 10px;
    width: auto;
    margin: 10px;

    &:hover{
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.brightTeal};
        transition: 0.3s;
        transform: scale(1.05);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 100%;
        margin: 10px auto;
        padding: 10px;
    }
`
