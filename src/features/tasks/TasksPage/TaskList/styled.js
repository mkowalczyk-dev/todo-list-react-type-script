import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.li`
    margin: 0px 0;
    padding: 0px;
    list-style-type: none;
    min-height: 80px;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-template-rows: auto;
    grid-gap: 11px;
    align-content: center;
    font-size: 20px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.forestGreen};
    border: none;
    transition: transform 1s ease-in;
    color: white;

    &:hover {
        background-color: ${({ theme }) => theme.colors.emerald};
        transition: 0.3s;
    }

    ${({ doneTask }) => doneTask && css`
        height: 50px;
        width: 50px;
    `}

    ${({ removeTask }) => removeTask && css`
        background-color: ${({ theme }) => theme.colors.thunderbird};
        width: 50px;
        height: 50px;
        border: none;
        color: white;

        &:hover{
            background-color: ${({ theme }) => theme.colors.redOrange};
            transition: 0.3s;
        }
    `}
`

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    color: ${({ theme }) => theme.colors.teal};
    text-decoration: none;

&:hover{
        color: ${({ theme }) => theme.colors.antiqueBronze};
        height: 50px;
        font-size: 20px;
        transition: 0.3s;
    }
`;