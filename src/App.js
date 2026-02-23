import { HashRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index.js";
import TaskPage from "./features/tasks/TaskPage/index.js";
import AuthorPage from "./features/author/index.js";
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