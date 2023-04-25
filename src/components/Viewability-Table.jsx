import { Context } from "../context/Task-Context"
import { useContext } from "react"

export const ViewabilityTable = ( {showTable, setShowTable} ) => {

  const { clearDoneTasks } = useContext(Context)

  const handleClear = ()=>{
    if(window.confirm("Estas seguro de que desea limpiar la tabla de tareas ya hechas?")){
      clearDoneTasks()
    }
  }
  return (
    <div>
      <input
      className=""
      type="checkbox"
      onChange={ event =>  setShowTable(event.target.checked)}
      checked={showTable}
      />
      <label className="ml-1 mr-1">Ocultar/Mostrar tareas ya hechas</label>
      <button
      className="bg-orange-400 rounded px-2.5 py-1 ml-3"
      onClick={ handleClear }>
        Limpiar tabla
      </button>
    </div>
  )
}


