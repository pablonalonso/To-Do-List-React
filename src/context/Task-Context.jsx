import { createContext, useState, useEffect } from "react";
import { listOfTasks as data } from "../data/list-of-tasks";
import { TaskRow } from "../components/Task-Row";

//* Context 
export const Context = createContext()

//* Component 
export const TaskContext = ( {children} )=>{

    //* State
    const[tasks, setTasks] = useState([])

    //* Local Storage 
    useEffect( ()=>{
        let storedTasks = localStorage.getItem('Stored tasks')
        if(storedTasks){
            setTasks(JSON.parse(storedTasks))
        } else{
            setTasks(data)
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('Stored tasks', JSON.stringify(tasks))
    })


    //!Fuction 1: createTask() 
    const createTask = (newTask)=>{
        !tasks.find( task => task.activity === newTask.activity) &&(
            setTasks([...tasks, {
                id: tasks.length,
                activity: newTask.activity,
                time: newTask.time,
                done: false
            }])
        )
    }

    //!Function 2: deleteTask() 
    const deleteTask = (taskID)=>{
        setTasks(tasks.filter( task => task.id !== taskID))
    }

    //!Function 4: printRowsOfTheTable() 
    const printRowsOfTheTable = (doneProperty)=>{
        return(
            tasks.filter( task => task.done === doneProperty)
            .map( task =>
                <TaskRow task={task} key={ task.id }/>
                )
        )
    }

    //!Function 5: toggleDone() 
    const toggleDone = (task)=>{
        setTasks(tasks.map( 
            thisObject => thisObject.activity === task.activity ? {...thisObject, done: !thisObject.done } : thisObject))
    }

     //!Function 6: toggleViewabilityOfTheTable() 
     const toggleViewabilityOfTheTable = ()=>{
        
     }

     //!Function 7: clearDoneTasks()
     const clearDoneTasks = ()=>{
        setTasks(tasks.filter( task => task.done === false))
     }

    return (
        <Context.Provider value={ {tasks, createTask, deleteTask, printRowsOfTheTable, toggleDone, clearDoneTasks, toggleViewabilityOfTheTable}}>
            {children}
        </Context.Provider>
        )

}