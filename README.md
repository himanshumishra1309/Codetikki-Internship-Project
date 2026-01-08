# Notes Management App

A simple and elegant notes application built with React that allows users to create, view, and delete notes. The app features real-time form validation, a clean user interface, and smooth user experience with loading states.

## How to Run

**Node Version Required:** Node.js 16.x or higher

**Installation:**
```bash
npm install
```

**Start Development Server:**
```bash
npm run dev
```

The app will open at `http://localhost:5173` in your browser.

## Component Breakdown

### 1. **App.jsx** (Main Component)
This is the brain of the application. It manages all the notes data and controls what shows on screen. When the app starts, it shows a loading animation for 2 seconds, then displays the actual content.

### 2. **NoteForm.jsx** (Form Component)
This component handles creating new notes. It has two input fields - one for the title and one for the description. It checks your input in real-time and shows error messages if something is wrong. The submit button only works when both fields are filled correctly.

### 3. **NoteList.jsx** (List Container)
This is a simple component that takes all your notes and displays them one by one. If you don't have any notes yet, it shows a friendly "empty state" message instead.

### 4. **NoteItem.jsx** (Individual Note Card)
Each note is displayed using this component. It shows the title and description nicely formatted, and has a delete button to remove the note.

### 5. **Loader.jsx** (Loading Spinner)
A simple loading animation that appears for 2 seconds when you first open the app, simulating data loading from a server.

### 6. **EmptyState.jsx** (No Notes Message)
When you don't have any notes saved, this component shows a friendly message encouraging you to add your first note.

## State Explanation

### Where State Lives
All the important data lives in the **App.jsx** component at the top level:
- **notes array**: Stores all your notes (each note has an id, title, and description)
- **isLoading boolean**: Controls whether to show the loading spinner or the actual content

### How Data Flows

**Creating a Note:**
1. User types in NoteForm
2. NoteForm validates the input (title must be 3+ characters, description must be 10+ characters)
3. User clicks "ADD NOTE" button
4. NoteForm sends the data UP to App.jsx using the `onAddNote` function
5. App.jsx adds the new note to the notes array
6. React automatically re-renders, and the new note appears in the list

**Deleting a Note:**
1. User clicks "DELETE" button on a specific note
2. NoteItem sends the note's ID UP to App.jsx using the `onDeleteNote` function
3. App.jsx removes that note from the notes array
4. React automatically re-renders, and the note disappears from the list

**Data Flow Pattern:**
```
App (holds all notes)
  ↓ passes notes array down
  ↓ passes delete function down
NoteList (receives notes)
  ↓ passes each note down
  ↓ passes delete function down
NoteItem (displays one note)
```

This is called "lifting state up" - the parent component controls all data, and children just display it and send actions back up.

## Assumptions/Limitations

### Design Choices:
1. **No Backend**: All notes are stored in memory only. If you refresh the page, your notes will disappear. This was intentional to keep the assessment focused on React skills.

2. **Simple Validation**: Title needs at least 3 characters, description needs at least 10 characters. These rules are checked in real-time as you type.

3. **No Edit Feature**: You can only create and delete notes, not edit them. This keeps the code simple and focused on core React concepts.

4. **Fixed Layout**: The app is designed for desktop screens. On mobile or very small screens, the layout might not look perfect.

5. **useState Only**: Following the assessment requirements, I used only `useState` for state management. For a larger app, you might use Context API or Redux, but they weren't needed here.

6. **2-Second Loading**: The loading time is simulated using `setTimeout`. In a real app, this would be actual data loading time from a server.

### Technical Trade-offs:
- **No TypeScript**: Used plain JavaScript to keep the code accessible and straightforward
- **Inline Styles**: Mixed Tailwind classes with some inline styles for specific color values from the design palette
- **No Testing**: No unit tests were included to keep the codebase simple for assessment purposes
- **Simple ID Generation**: Using `Date.now()` for note IDs works for this simple app but wouldn't be ideal for production

## Technologies Used

- **React 18**: For building the user interface
- **Vite**: For fast development and building
- **Tailwind CSS**: For styling and responsive design
- **React Hooks**: useState, useEffect, useRef for component logic

## Features Implemented

✅ Create notes with title and description  
✅ Real-time form validation with error messages  
✅ Delete notes instantly  
✅ Loading state simulation (2 seconds)  
✅ Empty state when no notes exist  
✅ Submit button disabled when form is invalid  
✅ Auto-focus on title field after submission  
✅ Clean and professional UI  
✅ Scrollable notes list for many notes

---

**Made for Codetikki Assessment**
