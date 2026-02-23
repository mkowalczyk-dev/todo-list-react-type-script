import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTaskById } from "../tasksSlice";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id))

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={!!task && (<><strong>Ukończono:</strong> {task ? (task.done ? "Tak" : "Nie") : "Brak danych"}</>)}
            />
        </Container>
    );
}

export default TaskPage;