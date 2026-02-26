import { useSelector, useDispatch } from "react-redux";
import { List, Content, Button, StyledNavLink } from "./styled";
import { doneTask, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { phrase } from "../../TaskPage/searchQueryParamName";
import { useQueryParameter } from "../queryParameters";
import { Task, CounterState } from "../../types";

const TaskList = () => {
    const query = useQueryParameter(phrase);
    const tasks: Task[] = useSelector((state: { tasks: CounterState }) => selectTasksByQuery(state, query || ""));
    const hideDone: boolean = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <>
            {tasks.map(task => (
                <>
                    {task.content.trimEnd() !== "" && (
                        <>
                            <List
                                key={task.id}
                                hidden={task.done && hideDone}
                            >
                                <Button
                                    doneTask={task.done}
                                    removeTask={false}
                                    onClick={() => dispatch(doneTask(task.id))}
                                >
                                    {task.done ? "✓" : ""}
                                </Button>
                                <Content done={task.done}>
                                    <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                                </Content>
                                <Button
                                    doneTask={false}
                                    removeTask={true}
                                    onClick={() => dispatch(removeTask(task.id))}
                                >🗑</Button>
                            </List>
                        </>)}
                </>))}
        </>
    )
};

export default TaskList;