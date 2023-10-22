import { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


export function Form({addToDo}) {

    const [newItem, setNewItem] = useState("")


    
function handleClick(e){
    e.preventDefault()
    addToDo(newItem)
    setNewItem("")
  }
  
    return (
    <form 
        className="create-todo"
        >
        <textarea
        type='text' 
        id='newItem' 
        placeholder="Add your todos..."
        onChange = {(e)=>setNewItem(e.target.value)} 
        value={newItem} 
        autoFocus
        autoComplete="off"
        />
        <Fab onClick={handleClick}><AddIcon /></Fab>
    </form>
    )
  
}