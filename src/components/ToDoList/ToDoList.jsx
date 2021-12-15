import React from 'react';
import classes from './ToDoList.module.scss';
import ToDoItem from '../ToDoItem';

const ToDoList = ({title, tasks}) => {
    return (
        <div className = {classes.container}>
            <div className = {classes.title}> 
                {title + ` (${tasks.length || '0'})`}
            </div>
            <div className = {classes.list}>
                {tasks.map(({title, completed, id}) => {
                    return (
                        <div className={classes.listItem} key = {id} >
                            <ToDoItem title = {title} completed = {completed} id = {id}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ToDoList;