import axios from "axios";

export const getExampleTasks = () => 
    axios<string[]>("/todo-list-react/exampleTasks.json").then(response => response.data); 
// getExampleTasks zwraca Promise, który jest tablicą znaków