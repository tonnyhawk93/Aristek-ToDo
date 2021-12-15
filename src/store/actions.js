import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    REQUEST_TASKS_SUCCESS,
    REQUEST_ERROR,
    REQUEST_BEGIN
} from '../constants';

import Api from '../api/api';

const api = new Api();

export const addTask = task => ({ type: ADD_TASK, payload: task });
export const deleteTask = id => ({ type: DELETE_TASK, payload: id });
export const editTask = data => ({ type: EDIT_TASK, payload: data });
export const requestTasksSuccess = tasks => ({ type: REQUEST_TASKS_SUCCESS, payload: tasks });
export const requestError = error => ({ type: REQUEST_ERROR, payload: error });
export const requestBegin = () => ({ type: REQUEST_BEGIN});
export const requestEditTaskSuccess = tasks => ({ type: REQUEST_TASKS_SUCCESS, payload: tasks });

export const requestTasks = () => {
    return  dispatch => {
        dispatch(requestBegin());
        api.getTasks()
            .then(tasks => dispatch(requestTasksSuccess(tasks)))
            .catch(e =>  dispatch(requestError("Ошибка загрузки задач!")))
    }
} 

export const requestEditTask = task => {
    return  dispatch => {
        dispatch(requestBegin());
        api.editTask(task)
            .then(tasks => dispatch(editTask(task)))
            .catch(e =>  dispatch(requestError("Ошибка редактирования задачи!")))
    }
} 

export const requestAddTask = task => {
    return  dispatch => {
        dispatch(requestBegin());
        api.addTask(task)
            .then(tasks => dispatch(addTask(task)))
            .catch(e =>  dispatch(requestError("Ошибка добавления задачи!")))
    }
} 

export const requestDeleteTask = id => {
    return  dispatch => {
        dispatch(requestBegin());
        api.deleteTask(id)
            .then(tasks => dispatch(deleteTask(id)))
            .catch(e =>  dispatch(requestError("Ошибка удаления задачи!")))
    }
} 