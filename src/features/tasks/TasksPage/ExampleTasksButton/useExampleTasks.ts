import axios from "axios";
import { useEffect, useState } from "react";
import { CounterState } from "../../types";

export const useExampleTasks = () => {
    const [exampleTasks, setExampleTasks] = useState<CounterState>({ // tutaj nie przekazujemy tablicy, tylko obiekt
        tasks: [],
        hideDone: false,
        loading: true,
    });

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("/exampleTasks.json");

                const { content, id } = await response.data;

                setExampleTasks({
                    tasks: content,
                    hideDone: false,
                    loading: false,
                    id: id,
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