import React from "react";
import uuid from "react-uuid";
import ReactDOM from "react-dom";
import { useState } from "react";
import NoteDisplay from "./components/NoteDisplay/NoteDisplay";
import SideBar from "./components/SideBar/SideBar";


const App = () =>{
    const [notes, setNotes] = useState([]);
    const [activeNote, setActiveNote] = useState(false);

    const onAddNote =() =>{
        const newNote = {
            id: uuid(),
            title: "Untitled note",
            body: "test",
            lastModified: Date.now()
        };
        setNotes([newNote, ...notes])
    };

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote
            }

            return note;
        });

        setNotes(updatedNotesArray)
    };


    const onDeleteNote = (idToDelete) => {
        setNotes(notes.filter((note) => note.id !==idToDelete));
    }

    const getActiveNote = () =>  {
        return notes.find((note) => note.id === activeNote); 
    }
    
    return (
        <div className="App">
            <SideBar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote}  activeNote={activeNote} setActiveNote={setActiveNote}/>
            <NoteDisplay activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));