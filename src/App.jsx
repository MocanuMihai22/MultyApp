import {Route, Routes} from "react-router-dom"
import AppForToDo from './pages/ToDo/AppForToDo.jsx'
import AppForNotes from './pages/Notes/AppForNotes.jsx'
import AppNoteBook from './pages/NoteBook/AppNoteBook.jsx'
import "./App.css"

function App(){
    return (
        <Routes>
        <Route path="/" element={<AppForToDo />}/>
        <Route path="/todoapp" element={<AppForToDo />}/>
        <Route path="/noteapp" element={<AppForNotes />}/>
        <Route path="/notebook" element={<AppNoteBook />}/>
        
        </Routes>
    )
}

export default App;