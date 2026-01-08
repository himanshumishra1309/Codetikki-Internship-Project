function NoteItem({ onDeleteNote, id, title, description }) {
  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 border-2 border-[#576238]/10 rounded-xl p-6 hover:border-[#FFD95D] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-[#576238] mb-2.5 break-words leading-tight">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed break-words whitespace-pre-wrap">
            {description}
          </p>
        </div>

        <button
          onClick={() => onDeleteNote(id)}
          className="flex-shrink-0 bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95 group-hover:scale-105"
          aria-label="Delete note"
        >
          DELETE
        </button>
      </div>
    </div>
  );
}


export default NoteItem;
