import styled from "styled-components";

export default styled.input`
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