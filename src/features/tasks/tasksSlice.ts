import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
import { Task, CounterState } from "./types";

const initialState: CounterState = {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        doneTask: ({ tasks }, { payload: taskId }: PayloadAction<number>) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }: PayloadAction<number>) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        allTasksDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: state => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }: PayloadAction<Task[]>) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const { addNewTask,
    toggleHideDone,
    doneTask,
    removeTask,
    allTasksDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = (state: { tasks: CounterState }): CounterState => state.tasks;

export const selectTasks = (state: { tasks: CounterState }): Task[] => selectTasksState(state).tasks;
export const selectHideDone = (state: { tasks: CounterState }): boolean => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state: { tasks: CounterState }): boolean => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state: { tasks: CounterState }): boolean => selectTasks(state).every(({ done }) => done)
export const selectLoading = (state: { tasks: CounterState }): boolean => selectTasksState(state).loading;

export const getTaskById = (state: { tasks: CounterState }, taskId: number): Task | undefined =>
    selectTasks(state).find(({ id }) => (id === taskId))

export const selectTasksByQuery = (state: { tasks: CounterState }, query: string): Task[] => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }

    return tasks.filter(({ content }) =>
        content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;