function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h3 className="text-2xl font-bold text-[#576238] mb-3">No notes yet</h3>
      <p className="text-gray-600 text-lg max-w-md">
        Add your first note using the form above and start organizing your thoughts!
      </p>
    </div>
  );
}


export default EmptyState;
