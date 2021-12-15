import initialState from "./initialState";
import {
    ADD_TASK,
    DELETE_TASK,
    EDIT_TASK,
    REQUEST_BEGIN,
    REQUEST_TASKS_SUCCESS,
    REQUEST_ERROR
} from '../constants';

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case REQUEST_BEGIN:
            return {...state, loading: true}
        case REQUEST_TASKS_SUCCESS:
            return {...state, loading: false, tasks: payload}
        case REQUEST_ERROR:
            return {...state, loading: false, error: payload}
        case ADD_TASK:
            return {...state, loading: false, tasks: [payload, ...state.tasks]}
        case DELETE_TASK:
            return {...state, loading: false, tasks: state.tasks.filter(task => task.id !== payload)}
        case EDIT_TASK:
            if(!payload.completed) return {...state, loading: false, tasks: state.tasks.map(task => task.id === payload.id ? payload : task)}
            return {...state, loading: false, tasks: [payload, ...state.tasks.filter(task => task.id !== payload.id)]}
        default:
            return {...state}
    }
}

export default reducer;

