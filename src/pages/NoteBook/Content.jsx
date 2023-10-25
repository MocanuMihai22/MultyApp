import React from "react";

function Content({activeNote, onUpdateNote}){

    const onEditField = (key, value) =>{
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    }



    if(!activeNote) return <div className="no-active-note">No note selected</div>

    return (
        <div className="app-main">
            <div className="app-main-note-edit">
                <input 
                type="text" 
                name="title" 
                autoFocus 
                value={activeNote.title}
                onChange={(e)=>onEditField("title", e.target.value)}    
                />
                <textarea 
                name="body" 
                placeholder="Write your note here..." 
                value={activeNote.body}
                onChange={(e)=>onEditField("body", e.target.value)}     
                />
            </div>
        </div>
    )

}

export default Content;