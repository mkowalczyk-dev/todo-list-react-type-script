import { useNavigate, useLocation } from "react-router-dom";

interface ReplaceQueryParameterProps {
    key: string;
    value: string;
}

export const useQueryParameter = (key: string) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useNavigate();

    return ({ key, value }: ReplaceQueryParameterProps) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history(`${location.pathname}?${newSearch}`);
    }
}