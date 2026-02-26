export interface Task {
    id: number;
    content: string;
    done: boolean;
}
export interface CounterState {
    tasks: Task[];
    hideDone: boolean;
    loading: boolean;
    id?: number;
}