import { StyledHeader } from "./styled";
import { ReactNode } from "react";

interface HeaderProps {
    title: ReactNode;
} // tworzymy interfejs, który będzie można powielić dla różnych komponentów

const Header = ({ title }: HeaderProps) => ( // określamy typ dla title
    <StyledHeader>
        <h1>{title}</h1>
    </StyledHeader>
)

export default Header;