import { useState, useContext } from 'react'
import { Context } from '../context/Task-Context'

export const TaskForm = () => {

    const { createTask } = useContext(Context)

    //!State of the form
    const [activity, setActivity] = useState('')
    const [time, setTime] = useState('00:00')

    //! Handling the submmit
    const handleSubmit = (event)=>{
        event.preventDefault()
        createTask({
            activity,
            time
        })
        setActivity("")
        setTime("00:00")
    }

    return (
        <form
        className='py-4'
        onSubmit={ handleSubmit }>

            <input
            className='mr-2 p-1 rounded text-black focus:outline-none placeholder:text-center'
            type="text"
            placeholder='Tarea'
            onChange={ event => setActivity(event.target.value)}
            value={activity}
            required
            autoFocus
            />
            
            <input
            className='mr-2 p-1 rounded text-black  focus:outline-none'
            type="time"
            onChange={ event => setTime(event.target.value)}
            value={time}
            required
            />

            <button
            className='bg-green-500 px-2 py-1 roundedmr-2 p-1 rounded'
            >
                Guardar
            </button>
        </form>
    )
}

