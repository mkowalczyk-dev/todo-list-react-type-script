export const getExampleTasks = async () => {

    const response = await fetch("/todo-list-react/exampleTasks.json");

    if(!response.ok) {
        new Error(response.statusText);
    }

    return (await response.json()) as string[]; // tak sobie radzimy z promise, wykorzystując wcześniej zdefklarowany interfejs
};