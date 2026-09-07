import Button from "../components/button";
import PlusIcon from "../assets/icons/plus.svg?react"
import { TaskItem } from "./task-item";
import  {useTaks} from "../hooks/use-tasks";
import {useTask} from "../hooks/use-task";


export function TaskList(){
    const {tasks} = useTaks()
    const {prepareTask} = useTask()
   

    function handleNewTask(){
        prepareTask()
    }
    return(
        <>
            <section className="space-y-3">
                <Button icon={PlusIcon} className=" w-full" onClick={handleNewTask}>Criar Tarefa</Button>
            </section>

            <section className="space-y-3">
                {tasks.map((task) => <TaskItem key={task.id} task={task}/>)}
            </section>        
        </>
    )
}