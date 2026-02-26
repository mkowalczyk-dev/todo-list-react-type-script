import axios from "axios";
import { useEffect, useState } from "react";
import { Task } from "../../types";

interface ExampleTasksState {
    state: "loading" | "success";
    content?: Task[];
    id?: number;
} // ten interfejs to pojedynczy obiekt

export const useExampleTasks = () => {
    const [exampleTasks, setExampleTasks] = useState<ExampleTasksState>({ // tutaj nie przekazujemy tablicy, tylko obiekt
        state: "loading",
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("/todo-list-react/exampleTasks.json");

                const { content, id } = await response.data;

                setExampleTasks({
                    state: "success",
                    content,
                    id,
                });
            }
            catch {
                console.log("Coś poszło nie tak...");
            }
        }
        setTimeout(fetchTasks, 1000);
    }, []);

    return exampleTasks;
}