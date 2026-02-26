import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../Input";
import { phrase } from "../../TaskPage/searchQueryParamName";
import { ChangeEventHandler } from "react";

export const Search = () => {

    const location = useLocation();
    const history = useNavigate();
    const query = (new URLSearchParams(location.search)).get(phrase);

    const onInputChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(phrase);
        } else {
            searchParams.set(phrase, target.value);
        }

        history(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Input
            placeholder="Filtruj zadania"
            value={query || ""}
            onChange={onInputChange}
        />
    )
};