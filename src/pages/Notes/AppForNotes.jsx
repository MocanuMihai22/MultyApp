import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { Notes } from "./Notes";
import { TextArea } from "./TextArea";
import { useState, useEffect } from "react";
import HighlightIcon from '@material-ui/icons/Highlight';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'; 
import BookIcon from '@material-ui/icons//Book';



function AppForNotes(){

    const [notes, setNotes] = useState(()=>{
        const localValue = localStorage.getItem("NOTES")
        if(localValue == null) return []
        return JSON.parse(localValue)}
      )

    useEffect(()=>{
        localStorage.setItem("NOTES", JSON.stringify(notes))
      },[notes])

function addNote(note){
    setNotes(currentNote => {
        return[
        ...currentNote, note
    ]})
}

function deleteNote(id){
    setNotes(prevNote=>{return prevNote.filter((noteItem, index)=>{
        return index !== id
    })})
}

return(
    <>
    <Header 
    color={'orange'}
    name={"Note"}
    icon={<HighlightIcon fontSize="medium"/>}

    icon2={<PlaylistAddCheckIcon />}
    theClass2={"secondIconToDo"}
    theLink2={"/todoapp"}

    icon3={<BookIcon />}
    theClass3={"secondIconNotebook"}
    theLink3={"/notebook"}
    
   
    />

    <TextArea onAdd ={addNote}/>
    {notes.map((noteItems, index)=>{
       return <Notes 
       key = {index}
       id = {index}
       title ={noteItems.title} 
       content ={noteItems.content}
        onDelete = {deleteNote}
       />

    })}
    
    <Footer />
    </>
    )

}


export default AppForNotes;