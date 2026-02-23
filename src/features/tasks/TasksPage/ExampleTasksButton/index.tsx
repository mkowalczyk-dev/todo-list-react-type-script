import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { SmallButton, ButtonLoading } from "./styled";

export const ExampleTasksButton = () => {

    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <SmallButton disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                ? <ButtonLoading>Ładowanie...</ButtonLoading>
                : "Pobierz przykładowe zadania"
            }
        </SmallButton>
    );
};