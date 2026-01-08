import EmptyState from "./EmptyState";
import NoteItem from "./NoteItem";


function NoteList({ onDeleteNote, notes }) {
  return (
    <div>
      {notes.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {notes.map(note => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              onDeleteNote={onDeleteNote}
            />
          ))}
        </div>
      )}
    </div>
  );
}


export default NoteList;
