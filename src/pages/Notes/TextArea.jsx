import { useState } from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';



export function TextArea({onAdd}){

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [isExpanded, setExpanded] = useState(false)


    function handleChange(event){
       const {name, value} = event.target;
            
     setNote(prevNote => {
               return {
                    ...prevNote, 
                    [name]: value
                }
            })
    }

    function submitNote(e){
        e.preventDefault()
        onAdd(note)
        setNote({
            title: "",
            content: ""
        })

    }

    function expand(){
        setExpanded(true)
    }


    return(
        <form className="create-note" >
        {isExpanded &&  <input 
            type="text" 
            name="title"
            placeholder="Note Title..." 
            value={note.title}
            onChange = {handleChange}
            />}
           
            
            <textarea 
            onClick={expand}
            name="content"
            placeholder="Note content..."
            value={note.content}
            onChange = {handleChange}
            rows={isExpanded ? 3 : 1}
            
            />

            <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>

        </form>
    )
}