import {Route, Routes} from "react-router-dom"
import AppForToDo from './pages/ToDo/AppForToDo.jsx'
import AppForNotes from './pages/Notes/AppForNotes.jsx'
import "./App.css"

function App(){
    return (
        <Routes>
        <Route path="/todoapp" element={<AppForToDo />}/>
        <Route path="/noteapp" element={<AppForNotes />}/>
        </Routes>
    )
}

export default App;