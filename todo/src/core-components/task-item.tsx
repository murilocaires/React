import ButtonIcon from "../components/buttonIcon";
import Card from "../components/card";
import InputCheckbox from "../components/inputCheckbox";
import XIcon from "../assets/icons/x.svg?react"
import Trash from "../assets/icons/trash.svg?react"
import Pencil from "../assets/icons/pencil.svg?react"
import Check from "../assets/icons/check.svg?react"
import { useState } from "react";
import InputText from "../components/inputText";
import {Text} from "../components/text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import { useTask } from "../hooks/use-task";

interface taskItemsProps{
    task : Task
}

export function TaskItem({task}:taskItemsProps){
    const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating)
    const [taskTitle, setTaskTitle] = useState(task.title || "")
    const { updateTask, updateTaskStatus, deleteTask } = useTask()
    function handleEditingText(){
        setIsEditing(true)
    }

    function handleExitEditTask(){
        if(task.state === TaskState.Creating){
            deleteTask(task.id)
        }
        setIsEditing(false)
    }

    function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>){
        setTaskTitle(e.target.value || "")
    }

    function handleSaveTask(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault()
        updateTask(task.id, {title:taskTitle})
        setIsEditing(false)
    }

    function handleDeleteTask(){
        deleteTask(task.id)
    }

    function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>){     
        const checked = e.target.checked
        updateTaskStatus(task.id, checked)
    }

    return(

        <Card size="md" >
            {!isEditing ? (
                    <div className="flex items-center gap-4">
                        <InputCheckbox 
                            onChange={handleChangeTaskStatus}
                            checked={task?.concluded ?? false}
                        />
                        <Text className={cx("flex-1",{"line-through":task?.concluded })}>
                            {task.title}
                        </Text>

                        <div className="flex gap-1">
                            <ButtonIcon variant="tertiary" icon={Trash} type="button" onClick={handleDeleteTask} />
                            <ButtonIcon variant="tertiary" icon={Pencil} type="button" onClick={handleEditingText}/>
                        </div>
                    </div>
                ) : (
                    <form className="flex items-center gap-4" onSubmit={handleSaveTask}>
                        <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus/>
                        <div className="flex gap-1">
                            <ButtonIcon variant="secondary" icon={XIcon} type="button" onClick={handleExitEditTask}/>
                            <ButtonIcon variant="primary" icon={Check}  type="submit"/>
                        </div>
                    </form>
                )}
        </Card>
    )
}