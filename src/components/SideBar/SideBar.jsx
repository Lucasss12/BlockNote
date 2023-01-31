import React from "react";

const SideBar = ({notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) =>{

   
    // return (
    //     <div className="app-sidebar">
    //         <div className="app-sidebar-header">
    //             <h1>Note</h1>
    //             <button onClick={onAddNote}>Add</button>
    //         </div>
    //         <div className="app-siderbar-notes">
    //             {notes.map((note)=>(
    //             <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
    //             onClick={()=> setActiveNote(note.id)}>
    //                 <div className="sidebar-note-title">
    //                     <strong>{note.title}</strong>
    //                     <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    //                 </div>

    //                 <p>{note.body && note.body.substr(0, 100 + "...")}</p>

    //                 <small className="note-meta">Last modified {" "} {new Date(note.lastModified).toLocaleDateString("fr-FR",{
    //                     hour: "2-digit",
    //                     minute: "2-digit",
    //                     hour12: false
    //                     })}</small>
    //             </div>
    //             ))}
    //         </div>
    //     </div> 
    // );

    
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <div className="app-sidebar-notes">
          {sortedNotes.map(({ id, title, body, lastModified }, i) => (
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
};


export default SideBar;