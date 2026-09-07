import { Badge } from "../components/badge";
import { Text } from "../components/text";
import { useTaks } from "../hooks/use-tasks";



export function TaskSummary(){
    const { createdtaskCount, concludedTasksCount} = useTaks()
    return(
        <>
            <div  className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300">Tarefas criadas</Text>
                <Badge variant="secondary">{createdtaskCount}</Badge>
            </div>
            <div className="flex items-center gap-2">
                <Text variant="body-sm-bold" className="!text-gray-300 ">Concluidas</Text>
                <Badge variant="primary">{concludedTasksCount} de {createdtaskCount}</Badge>
            </div>
        </>
    )
}