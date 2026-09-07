import { type Task, TASKS_KEY, TaskState} from "../models/task"
import {useLocalStorage} from "usehooks-ts"



export function useTaks(){
    const [tasks] = useLocalStorage<Task[]>(TASKS_KEY, [])

    return {
        tasks,
        createdtaskCount: tasks.filter((task) => task.state === TaskState.Created).length || 0,
        concludedTasksCount: tasks.filter((task) => task.concluded).length
    }
    
}