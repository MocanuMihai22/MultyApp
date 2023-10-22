import { useState, useEffect } from 'react'
import { Form } from './Form'
import { ToDos } from './ToDos'
import { Header } from "../../Header"
import { Footer } from '../../Footer'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'; 
import HighlightIcon from '@material-ui/icons/Highlight';



function AppForToDo() {
  
const [todos, setTodos] = useState(()=>{
  const localValue = localStorage.getItem("ITEMS")
  if(localValue == null) return []
  return JSON.parse(localValue)}
)

useEffect(()=>{
  localStorage.setItem("ITEMS", JSON.stringify(todos))
},[todos])

function addToDo(title){
  setTodos(currentTodo => [...currentTodo, {id:crypto.randomUUID(), title, completed: false}])
}

  return (
    <div className='background'>

    <Header 
    color={'purple'} 
    icon={<PlaylistAddCheckIcon fontSize="medium"/>} 
    name={"ToDoApp"}
    icon2={<HighlightIcon />}
    theClass={"secondIconNote"}
    theLink={"/noteapp"}
    />

    <Form addToDo = {addToDo}/>
   
    <ToDos todos={todos} setTodos={setTodos}/>

    <Footer/>
    
    </div>
  )
}

export default AppForToDo;
