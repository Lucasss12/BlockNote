import React from "react";

const NoteDisplay = ({activeNote, onUpdateNote}) =>{

    const onEditField= (key, value) => {
        onUpdateNote({
            id: activeNote.id,
            [key]: value,
            lastModified: Date.now(),
        })
    }   

   if (!activeNote) return <div className="no-active-note">No note selected</div>
    return (
       <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id="title" onChange={(event) =>onEditField("title", event.target.value)} value={activeNote.title}autoFocus/> 
            <textarea id="body" onChange={(event) =>onEditField("body", event.target.value)} value={activeNote.body} placeholder="Write your note here...."/>
        </div>
        <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.body}</div>
        </div>
       </div>
    )
}

export default NoteDisplay;