import { v4 as uuidv4 } from 'uuid';

export default function createTask(title) {
    return {
        title,
        id: uuidv4(),
        completed: false
    }
}