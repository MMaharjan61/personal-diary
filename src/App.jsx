feature/header-styling
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import DiaryCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Entrylist from "./components/Entrylist";
main

const App = () => {
  // Store all diary entries in state
  const [diaryEntries, setDiaryEntries] = useState([]);

  // Load saved entries when the app starts
  useEffect(() => {
    // Get entries from browser's storage
    const savedEntries = localStorage.getItem('diaryEntries');
    
    // If we found entries, load them
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      setDiaryEntries(parsedEntries);
      console.log('=== Loaded Diary Entries ===');
      console.log('Total entries:', parsedEntries.length);
      console.log('Entries:', parsedEntries);
      console.log('=======================');
    } else {
      console.log('No diary entries found in storage');
    }
  }, []);

  // Function to add a new diary entry +++ For you Manoj <3 +++
  // This will be called when the entry form is submitted
  // Expected form data structure:
  // {
  //   title: string,      // The title of the diary entry
  //   date: string,       // The date selected for the entry
  //   imageUrl: string,   // URL of the uploaded image
  //   content: string     // The main content of the diary entry
  // }
  const addDiaryEntry = (formData) => {
    // Create a new entry with a unique ID and the form data
    const entryToAdd = {
      id: Date.now(),     // Unique identifier for the entry
      createdAt: new Date().toISOString(), // When the entry was created
      title: formData.title,
      date: formData.date,
      imageUrl: formData.imageUrl,
      content: formData.content
    };

    // Update state and localStorage
    const updatedEntries = [...diaryEntries, entryToAdd];
    setDiaryEntries(updatedEntries);
    localStorage.setItem('diaryEntries', JSON.stringify(updatedEntries));
    
    // Simple verification log
    console.log('Entry added successfully:', entryToAdd);
  };

  return (
    // feature/header-styling
    <div className="min-h-screen bg-gradient">
      <header className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-highlight mb-8">MyDiary</h1>
        {/* 
          TODO for Manoj <3: Replace this button with a form component that:
          1. Opens in a modal or separate page
          2. Contains input fields for:
             - title (text input)
             - date (date picker)
             - image upload (file input with preview)
             - content (rich text editor or textarea)
          3. Has submit and cancel buttons
          4. Validates all required fields
          5. Calls addDiaryEntry(formData) on successful submission
          
          Current button is just a placeholder that creates sample entries
          for testing the diary entry creation functionality.
        */}
        <button 
          className="add-entry-btn"
          onClick={() => {
            const sampleEntry = {
              title: "Sample Diary Entry",
              date: new Date().toISOString().split('T')[0],
              imageUrl: "https://picsum.photos/400/300",
              content: "This is a sample diary entry created for testing purposes. It will be replaced by the actual form once implemented."
            };
            addDiaryEntry(sampleEntry);
          }}
        >
          Add entry
        </button>
      </header>
      <main className="container mx-auto px-4">
        <DiaryCalendar className="min-w-min"/>
        <Entrylist />
      </main>
    </div>
  );
};

export default App;