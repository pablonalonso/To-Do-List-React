import { Context } from "../context/Task-Context"
import { useContext } from "react"

export const TaskRow = ({task}) => {

    const { deleteTask, toggleDone } = useContext(Context)

    return (
        <tr className=" text-gray-300 text-center">
            <td className="px-2">{task.activity}</td>
            <td className="px-2">{task.time}</td>

            <td className="px-2">
                <input
                type="checkbox"
                checked={ task.done }
                onChange={ ()=> toggleDone(task)}
                />
            </td>
            <td className="py-1 px-2">
                <button
                    className="bg-red-500 text-white py-1 px-2 mb-1 ml-3 rounded "
                    onClick={ ()=> deleteTask(task.id)}>
                    Eliminar
                </button>
            </td>

        </tr>
    )
}


