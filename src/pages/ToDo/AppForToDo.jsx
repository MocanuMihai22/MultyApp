import { useState, useEffect } from 'react'
import { Form } from './Form'
import { ToDos } from './ToDos'
import { Header } from "../../Header"
import { Footer } from '../../Footer'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'; 
import HighlightIcon from '@material-ui/icons/Highlight';
import BookIcon from '@material-ui/icons//Book';



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
    <div>

    <Header 
    color={'purple'} 
    icon={<PlaylistAddCheckIcon fontSize="medium"/>} 
    name={"ToDoApp"}

    theClass2={"secondIconNote"}
    theLink2={"/noteapp"}
    icon2={<HighlightIcon />}

    icon3={<BookIcon />}
    theClass3={"secondIconNotebook"}
    theLink3={"/notebook"}

    />
  

    <Form addToDo = {addToDo}/>
   
    <ToDos todos={todos} setTodos={setTodos}/>

    <Footer/>
    
    </div>
  )
}

export default AppForToDo;
