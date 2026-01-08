import { useState, useRef, useEffect } from "react";


function NoteForm({onAddNote}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ title: false, description: false });


  const titleRef = useRef(null);
  const descriptionRef = useRef(null);


  useEffect(() => {
    titleRef.current.focus();
  }, []);


  useEffect(() => {
    const newErrors = {};


    if (touched.title) {
      if (!title.trim()) {
        newErrors.title = "Title is required";
      } else if (title.length < 3) {
        newErrors.title = "Title must be at least 3 characters";
      }
    }


    if (touched.description) {
      if (!description.trim()) {
        newErrors.description = "Description is required";
      } else if (description.length < 10) {
        newErrors.description = "Description must be at least 10 characters";
      }
    }


    setErrors(newErrors);
  }, [title, description, touched]);


  const isFormValid = title.trim().length >= 3 && description.trim().length >= 10;


  const handleSubmit = (event) => {
    event.preventDefault();


    if (isFormValid) {
      onAddNote({title, description});


      setTitle('');
      setDescription('');
      setErrors({});
      setTouched({ title: false, description: false });
      titleRef.current.focus();
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#576238] uppercase tracking-wide">
          TITLE <span className="text-red-500">*</span>
        </label>
        <input
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, title: true }))}
          placeholder="Enter note title..."
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none text-gray-900
            ${errors.title 
              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
              : 'border-gray-200 focus:border-[#FFD95D] focus:ring-2 focus:ring-[#FFD95D]/30 bg-white'
            }
          `}
        />
        {errors.title && (
          <span className="text-red-500 text-sm font-medium flex items-center gap-1.5 mt-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.title}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-bold text-[#576238] uppercase tracking-wide">
          DESCRIPTION <span className="text-red-500">*</span>
        </label>
        <textarea
          ref={descriptionRef}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, description: true }))}
          placeholder="Write your thoughts here..."
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 outline-none resize-none text-gray-900
            ${errors.description 
              ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
              : 'border-gray-200 focus:border-[#FFD95D] focus:ring-2 focus:ring-[#FFD95D]/30 bg-white'
            }
          `}
        />
        {errors.description && (
          <span className="text-red-500 text-sm font-medium flex items-center gap-1.5 mt-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {errors.description}
          </span>
        )}
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        className={`w-full py-3.5 px-6 rounded-lg font-bold text-white text-lg transition-all duration-200 flex items-center justify-center gap-2
          ${isFormValid 
            ? 'bg-[#576238] hover:bg-[#576238]/90 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer' 
            : 'bg-gray-300 cursor-not-allowed opacity-60'
          }
        `}
      >
        ADD NOTE
      </button>
    </form>
  );
}


export default NoteForm;
