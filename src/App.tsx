import { HashRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import AuthorPage from "./features/author/index";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from './Navigation/index.js';

export const App = () =>
(
    <HashRouter>
        <Navigation />
        <Routes>
            <Route path={toTask()} element={<TaskPage />} />
            <Route path={toTasks()} element={<TasksPage />} />
            <Route path={toAuthor()} element={<AuthorPage />} />
            <Route path="/" element={<TasksPage />} />
        </Routes>
    </HashRouter>
)