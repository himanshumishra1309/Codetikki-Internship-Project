import { useState, useEffect } from 'react'
import './App.css'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Loader from './components/Loader'


function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);


    return () => clearTimeout(timer);
  }, []);


  const addNote = (note) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };


  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };


  return (
    <div className="h-screen bg-[#F0EADC] py-6 px-4 flex flex-col overflow-hidden">
      <div className="mx-auto w-full flex flex-col h-full" style={{ maxWidth: '1400px' }}>
        <div className="text-center mb-6 flex-shrink-0">
          <h1 className="text-4xl font-bold text-[#576238] mb-2">Notes App</h1>
        </div>

        <div className="flex gap-6 flex-1 min-h-0">
          <div className="w-[650px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#576238]/10 h-full flex flex-col">
              <h2 className="text-xl font-semibold text-[#576238] px-8 pt-6 pb-4 flex items-center gap-2 flex-shrink-0">
                Create New Note
              </h2>
              <div className="px-8 pb-6 flex-1 overflow-y-auto">
                <NoteForm onAddNote={addNote} />
              </div>
            </div>
          </div>

          <div className="w-[650px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#576238]/10 h-full flex flex-col overflow-hidden">
              <div className="bg-gradient-to-r from-[#576238] to-[#576238]/90 px-8 py-4 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                    Your Notes
                  </h2>
                  {!isLoading && notes.length > 0 && (
                    <span className="bg-[#FFD95D] text-[#576238] font-bold px-4 py-1.5 rounded-full text-sm">
                      {notes.length} {notes.length === 1 ? 'Note' : 'Notes'}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
                {isLoading ? (
                  <Loader />
                ) : (
                  <NoteList onDeleteNote={deleteNote} notes={notes} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App
