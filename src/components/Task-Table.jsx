import { Context } from "../context/Task-Context"
import { useContext } from "react"


export const TaskTable = ( {finishedTasksTable = false}) => {

    const { printRowsOfTheTable, tasks } = useContext(Context)

    const completedTasks = tasks.filter( task => task.done === true)
    const uncompletedTasks = tasks.filter( task => task.done === false)

    if(completedTasks.length === 0 && finishedTasksTable === true){
        return  <p className="bg-gray-500  text-white p-5 text-center mb-9 ">
                    Quedan tareas pendientes!<br /> Manten el foco en ellas. Tu puedes!
                </p>
    }else if( uncompletedTasks.length === 0 && finishedTasksTable === false){
        return  <p className="bg-gray-500  text-white p-5 text-center mb-9 ">
                    Todas las tareas de la lista han sido completadas <br />
                    Bien hecho!
                </p>
    }
       


    return (
        <table className="bg-gray-600 rounded-xl w-full mb-9">
            <thead className="">
                <tr className="font-bold bg-gray-800 ">
                    <th className="py-2 px-4">Tarea</th>
                    <th className="py-2 px-4">Hora</th>
                    <th className="py-2 px-4">Hecha</th>
                    <th className="py-2 px-4">Remover</th>
                </tr>
            </thead>

            <tbody>
                { printRowsOfTheTable(finishedTasksTable)}
            </tbody>
        </table>
    )
}


