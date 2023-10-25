import React from "react"

function Sidebar({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}){
    return(
        
        <div className="app-sidebar">
    <div className="app-sidebar-header">
        <h1>My NoteBook</h1>
        <button className="NBbutton" onClick={onAddNote}>Add</button>
    </div>

<div className="app-sidebar-notes">
    {notes.map((note, index)=>{
        return(
        <div 
        className={`app-sidebar-note ${note.id === activeNote && "active"}`}
        onClick={()=>setActiveNote(note.id)}
        >
        <div className="sidebar-note-title">
            <strong>{note.title}</strong>
            <button className="NBbutton" onClick={()=>onDeleteNote(note.id)}>Delete</button>
        </div>

        <p>{note.body && note.body.substr(0, 100) + "..."}</p>


        <small className="note-meta">
            <strong>Last modified </strong> {new Date(note.lastModified).toLocaleDateString("en-US", {
                hour: "2-digit",
                minute: "2-digit"
            })}
        </small>
    
        <small className="note-meta">
            <strong> Added on </strong>{note.firstModified}
        </small>
        <br></br>
        <small>Page {note.page} {index+1}</small>
    </div>
    )})}
          
</div>
</div>
    )
}


export default Sidebar;