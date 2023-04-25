import './App.css';
import { TaskForm } from './components/Task-Form';
import { TaskTable } from './components/Task-Table';
import { Context } from './context/Task-Context';
import { useContext, useState, useEffect } from 'react';
import { ViewabilityTable } from './components/Viewability-Table';


export default function App() {

  const { tasks } = useContext(Context)


  const [showTable, setShowTable] = useState('')

  useEffect( ()=> {
    let storedValue = localStorage.getItem('Show table')
    const defaultValue = true
    const value = storedValue ? JSON.parse(storedValue) : defaultValue
    setShowTable(value)
  }, [])

  useEffect( ()=>{
    localStorage.setItem('Show table', JSON.stringify(showTable))
  },[showTable])

  return (
    <div className='container mx-auto w-96 mt-6 '>
      <h1 className='text-4xl font-bold text-white-900 text-center my-1'>To-Do App</h1>
      <TaskForm/>
     
      {
        tasks.length > 0 && (
          <>
            
              <h3 className=' text-center bg-red-500 text-gray-800 '>Tareas pendientes</h3>
              <TaskTable/>

              <ViewabilityTable
                showTable={showTable}
                setShowTable={(checked)=> setShowTable(checked)}
              />

              {
                showTable && (
                  <>
                    <h3 className=' text-center bg-green-500 text-gray-800 mt-2'>Tareas ya hechas</h3>
                    <TaskTable finishedTasksTable={true}/>
                  </>
                )
              }

              
          </>
        )
      }

      {
        tasks.length === 0 && (<p className="bg-gray-500  text-white p-5 text-center mb-9 ">
                                  Lista de tareas vacía. <br/>Comienza a agregar algunas!
                              </p>)
      }
     
    </div>
  );
}

