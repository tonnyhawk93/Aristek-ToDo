import React, { useEffect } from 'react';
import {spinner} from './App.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import LayOut from './components/LayOut';
import ToDoList from './components/ToDoList';
import AddPanel from './components/AddPanel';
import ContentLayOut from './components/ContentLayOut';
import Tag from './components/Tag';
import { requestTasks } from './store/actions';
import ClipLoader from "react-spinners/ClipLoader";
import ErrorMessage from './components/ErrorMessage';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestTasks())
	}, [dispatch]);
	const isLoading = useSelector(state => state.loading);
	const error = useSelector(state => state.error);
	const tasks = useSelector(state => state.tasks);
	const{completed, unCompleted} = tasks.reduce((res, task) => {
		if(task.completed) {
			res.completed.push(task);
		}else {
			res.unCompleted.push(task);
		}
		return res;
	}, { completed:[], unCompleted:[] });
	return (
				<LayOut>
					{isLoading ? <div className={spinner}><ClipLoader size={150}/></div>  : 
					error ? <ErrorMessage message = {error}/> :
						<ContentLayOut>
							<AddPanel />
							<Tag title="Total" count={tasks.length} />
							<ToDoList title="To do" tasks={unCompleted} />
							<ToDoList title="Completed" tasks={completed} />
						</ContentLayOut>}
				</LayOut>
	);
}

export default App;
