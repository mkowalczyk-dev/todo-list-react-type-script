import { toTasks, toAuthor } from "../routes";
import { List, ListItem, StyledNavLink } from "./styled";

const Navigation = () => {
    return (
        <nav>
            <List>
                <ListItem>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to={toAuthor()}> O autorze</StyledNavLink>
                </ListItem>
            </List>
        </nav>
    )
}

export default Navigation;