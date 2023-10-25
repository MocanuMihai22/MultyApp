import './App.css'
import uuid from 'react-uuid'
import Sidebar from './Sidebar'
import Content from './Content'
import { useState } from 'react'


function App() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)

  const date = new Date(Date.now()).toLocaleDateString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
})
  
  const onAddNote = () =>{
    const newNote = {
      id: uuid(),
      title: "Page Title",
      body: "Content",
      lastModified: Date.now(),
      firstModified: date,
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
  )
}

export default App
