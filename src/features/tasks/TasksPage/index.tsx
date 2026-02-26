import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { Search } from "./Search";
import { ExampleTasksButton } from "./ExampleTasksButton";
import { fetchExampleTasks } from "../tasksSlice";
import { useDispatch } from "react-redux";

function TasksPage() {

  const dispatch = useDispatch();
console.log(dispatch(fetchExampleTasks()))

  return (

    <Container>
      <Header
        title="Lista zadań"
      />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<ExampleTasksButton />}
        body={
          <Form />
        }
      />

      <Section
        title="Wyszukiwarka"
        body={
          <Search />
        }
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons />
        }
        body={
          <TaskList />
        }
      />

    </Container>
  );
}

export default TasksPage;