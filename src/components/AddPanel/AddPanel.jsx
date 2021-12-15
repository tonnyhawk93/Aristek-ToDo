import React, {useRef, useCallback, useState} from "react";
import {container, error} from './AddPanel.module.scss';
import { useDispatch } from "react-redux";
import createTask from "../../utils/createTask";
import { requestAddTask } from "../../store/actions";

const validate = title => {
    return !!title.trim().length
}

const AddPanel = () => {
    const [isError, setError] = useState(false);
    const showError =  useCallback(() => setError(true), []);
    const hideError =  useCallback(() => setError(false), []);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const onButtonClick = useCallback(() => {
        const title = inputRef.current.value;
        if(validate(title)) {
            dispatch(requestAddTask(createTask(title)));
            inputRef.current.value = '';
        }else {
            inputRef.current.value = '';
            inputRef.current.focus();
            showError(); 
            setTimeout(()=>{
                hideError();
            }, 6000)
        }
    }, [showError, hideError, dispatch]) 
    return (
        <div className = {container + ' ' + (isError && error)}>
            <input type="text" ref = {inputRef} onChange = {hideError} placeholder = {isError ? "Task can't be empty!" : "+ Add a task, press Enter to save"}/>
            <button onClick={onButtonClick}>Add</button>
        </div>
    )
}
export default AddPanel;