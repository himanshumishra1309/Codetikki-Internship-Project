function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="w-20 h-20 border-4 border-[#576238]/20 border-t-[#576238] rounded-full animate-spin"></div>
        {/* Inner pulsing circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFD95D] rounded-full animate-pulse"></div>
      </div>
      <p className="mt-6 text-[#576238] font-semibold text-lg animate-pulse">Loading your notes...</p>
    </div>
  );
}


export default Loader;
