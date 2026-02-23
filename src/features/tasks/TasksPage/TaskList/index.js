import { useSelector, useDispatch } from "react-redux";
import { List, Content, Button, StyledNavLink } from "./styled";
import { doneTask, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { phrase } from "../../TaskPage/searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
    const query = useQueryParameter(phrase);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <>
            {tasks.map(task => (
                <>
                    {task.content.trimmed !== "" && (
                        <>
                            <List
                                key={task.id}
                                hidden={task.done && hideDone}
                            >
                                <Button
                                    doneTask
                                    onClick={() => dispatch(doneTask(task.id))}
                                >
                                    {task.done ? "✓" : ""}
                                </Button>
                                <Content done={task.done}>
                                    <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                                </Content>
                                <Button
                                    removeTask
                                    onClick={() => dispatch(removeTask(task.id))}
                                >🗑</Button>
                            </List>
                        </>)}
                </>))}
        </>
    )
};

export default TaskList;