// import uuid from 'react-uuid'
import Sidebar from './Sidebar'
import Content from './Content'
import { useState, useEffect } from 'react'
import { Header } from "../../Header";
import BookIcon from '@material-ui/icons//Book';
import HighlightIcon from '@material-ui/icons/Highlight';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'; 


function AppNoteBook() {
  const [notes, setNotes] = useState(()=>{
    const localValue = localStorage.getItem("notes")
    if(localValue == null) return []
    return JSON.parse(localValue)})

  const [activeNote, setActiveNote] = useState(false)

  useEffect(()=>{
    localStorage.setItem("notes", JSON.stringify(notes))
  },[notes])

  const date = new Date(Date.now()).toLocaleDateString("en-US")
  
  const onAddNote = () =>{
    const newNote = {
      id: crypto.randomUUID(),
      title: "Page Title",
      body: "Content",
      lastModified: Date.now(),
      firstModified: date,
      page: ""
    }
    setNotes([newNote, ...notes])

  }

  const onDeleteNote = (id) =>{
    setNotes(notes.filter((note)=>note.id !== id))
  }

  const getActiveNote = () =>{
    return (
      notes.find((note)=>note.id === activeNote)
      )
  }

  const onUpdateNote = (updatedNote) =>{
    const updatedNotesArray = notes.map(note=>{
      if(note.id===activeNote){
        return updatedNote;
      }


      return note;
    })
    setNotes(updatedNotesArray)
  }


  return (
    <>
    <Header 
    color={'notebookColor'}
    name={"NoteBook"}
    icon={<BookIcon fontSize="medium"/>}
   
    theClass2={"secondIconNote"}
    theLink2={"/noteapp"}
    icon2={<HighlightIcon />}

    theClass3={"secondIconToDo"}
    theLink3={"/todoapp"}
    icon3={<PlaylistAddCheckIcon />}
    />

    <div className='App'>
      <Sidebar 
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
      <Content
       activeNote={getActiveNote()}
       onUpdateNote={onUpdateNote}
      />
      
    </div>
    
    </>
  )
}

export default AppNoteBook;
