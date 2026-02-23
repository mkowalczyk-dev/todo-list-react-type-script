import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormField, StyledButton } from "./styled";
import { addNewTask } from "../../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
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
        inputRef.current.focus();
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