import { HOST } from "../constants";

export default class Api {
    async getTasks() {
        const response = await fetch(HOST);
        const tasks = await response.json();
        return tasks;
    }
    async editTask({id, title, completed}) {
        const response = await fetch(`${HOST}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({title, completed}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();;
    }
    async deleteTask(id) {
        const response = await fetch(`${HOST}/${id}`, {
            method: 'DELETE'
        });
        return await response.json();;
    }
    async addTask(task) {
        const response = await fetch(`${HOST}`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return await response.json();;
    }
};
