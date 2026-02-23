import styled, { css } from "styled-components";

export const SmallButton = styled.button`
    color: ${({ theme }) => theme.colors.teal};
    height: 50px;
    font-size: 20px;
    border: none;
    background-color: white;

    &:hover{
        color: ${({ theme }) => theme.colors.brightTeal};
        height: 50px;
        font-size: 20px;
        border: none;
        transition: 0.3s;
    }

    ${({ done }) => done && css`
        color: ${({ theme }) => theme.colors.brightGrey};
        height: 50px;
        font-size: 20px;
        padding: 10px;
        border: none;

        &:hover {
            color: ${({ theme }) => theme.colors.brightGrey};
        }
    `}
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;