import React from "react"
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoItem({id, checked, content, toggleChecked, deleteItem}){

    function handleChange(id, completed){
        toggleChecked(id,completed)
    }

    function handleClick(){
        deleteItem(id)
    }

    return(
        <li className="todoList">
      <div>
      <input 
      type='checkbox' 
      checked={checked}
      onChange={e => handleChange(id, e.target.checked)} 
      />  
      <p>{content}</p>
      </div>
      <button onClick={handleClick}><DeleteIcon/></button>
      </li>
    )
}

export default ToDoItem;