import React, {useState, useCallback, useRef, useEffect} from "react";
import {container, textClass, controls, checkbox, button, completedClass} from './ToDoItem.module.scss';
import ControlButton from "../ControlButton";
import deleteIcon from '../../icons/delete_icon.svg';
import editIcon from '../../icons/edit_icon.svg';
import { useDispatch } from "react-redux";
import { requestDeleteTask, requestEditTask } from "../../store/actions";

const ToDoItem = ({title, completed, id}) => {
    const dispatch = useDispatch();
    const [isCompleted, setCompleted] = useState(completed);
    const inputRef = useRef(null);
    const [isInputDisabled, setInputDisabled] = useState(true);
    const onDeleteButtonClick = useCallback(()=> {
        dispatch(requestDeleteTask(id));
    }, [dispatch, id])
    const blurInput = useCallback(e => {
        if(e.target !== inputRef.current) {
            setInputDisabled(true);
            if(inputRef.current && inputRef.current.value) {
                dispatch(requestEditTask({id, title: inputRef.current.value, completed}));
            }else {
                dispatch(requestDeleteTask(id));
            }
        }
    }, [setInputDisabled, dispatch, id, completed]);
    const onKeyEnter = useCallback(e => {
        if(e.key === "Enter") {
            setInputDisabled(true)
            if(inputRef.current && inputRef.current.value) {
                dispatch(requestEditTask({id, title: inputRef.current.value, completed}));
            }else {
                dispatch(requestDeleteTask(id));
            }
        }
    }, [setInputDisabled, dispatch, id, completed])

    useEffect(() => {
        if(!isInputDisabled) {
            inputRef.current.focus();
            document.addEventListener('click', blurInput);
            document.addEventListener('touchstart', blurInput);
            document.addEventListener('keydown', onKeyEnter);
        }
        return () => {
            document.removeEventListener('click', blurInput);
            document.removeEventListener('touchstart', blurInput);
            document.removeEventListener('keydown', onKeyEnter);
        }
    }, [isInputDisabled, blurInput, onKeyEnter]);

    const onCheckboxChangeHandler = useCallback(()=>{
        setTimeout(() => dispatch(requestEditTask({id, title: inputRef.current.value, completed: !isCompleted})), 100)
        setCompleted(!isCompleted);
        
    }, [isCompleted, dispatch, id]) 
    const onEditClickHandler = useCallback(()=> {
        setInputDisabled(false);
    }, [])
    return (
        <div className = {container}>
            <div>
                <label className = {checkbox}  onChange={onCheckboxChangeHandler}>
                    <input type="checkbox" defaultChecked={isCompleted}/>
                    <span></span>
                </label>
            </div>
            <div className = {isCompleted ? (textClass  + ' ' + completedClass) :  textClass}>
                <input type="text" defaultValue={title} disabled = {isInputDisabled} ref={inputRef}/>
            </div>
            <div className = {controls}>
                {(!isCompleted && isInputDisabled) && 
                    <div className={button}><ControlButton image={editIcon} cb = {onEditClickHandler}/></div>
                }
                <div className={button}> <ControlButton image={deleteIcon} cb = {onDeleteButtonClick}/></div>
            </div>
        </div>
    )
}

export default ToDoItem;