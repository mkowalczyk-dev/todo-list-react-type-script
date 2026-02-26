import { useState, useRef, SubmitEventHandler } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormField, StyledButton } from "./styled";
import { addNewTask } from "../../tasksSlice";



const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState(""); // domyślna wartość jest stringiem, dlatego nie musimy określać jej typu

    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();

    const onFormSubmit: SubmitEventHandler<HTMLFormElement> = (event) => { // jak najedziemy z ctrl na onSubmit w return na dole, to widać czego się spodziewa i trzeba to wpisać do (event)
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addNewTask({
            content: newTaskContent,
            done: false,
            id: nanoid(),
        }))

        setNewTaskContent("");
        inputRef.current!.focus(); // dajemy !, bo wiemy, że w tym momencie po wysłaniu formularza to już nie jest null - ? też może być
    }

    return (
        <form onSubmit={onFormSubmit}> 
            
            <FormField
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?" />
            <StyledButton>Dodaj do listy</StyledButton>
        </form>
    )
}

export default Form;