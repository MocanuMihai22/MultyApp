import DeleteIcon from '@material-ui/icons/Delete';
import ToDoItem from './ToDoItem';
 
 export function ToDos({todos, setTodos}){


    function toggleChecked(id, completed){
        setTodos(currentTodo => currentTodo.map(todo=>{
          if(todo.id === id){
            return {...todo, completed}
          }
          return todo
        } 
        ))}
      
      function deleteItem(id){
        setTodos((currentTodo) => currentTodo.filter(todo=>todo.id !== id
            ))
      }


    return(
      <div className="todosBox">

      <h1>ToDoList</h1>

      <div className="todoArea">
        <ul>
        {todos.map(todo=> {
      return (  
      <ToDoItem 
          key={todo.id}
          id={todo.id}
          content={todo.title}
          checked={todo.completed}
          toggleChecked={toggleChecked}
          deleteItem={deleteItem}
        />
     
       )})}
    </ul>
    </div>
    </div>
    )
    
 }