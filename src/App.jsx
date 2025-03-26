import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Entrylist from "./components/Entrylist";
import AddEntry from "./components/AddEntry";
import { loadEntries, saveEntry } from "./components/Storage";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);

  useEffect(() => {
    const savedEntries = loadEntries();
    setEntries(savedEntries);
  }, []);

  /*
  // Store all diary entries in state
  //const [diaryEntries, setDiaryEntries] = useState([]);

  // Load saved entries when the app starts
  useEffect(() => {
    // Get entries from browser's storage
    const savedEntries = localStorage.getItem("diaryEntries");

    // If we found entries, load them
    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries);
      // Convert date strings back to Date objects
      const entriesWithDates = parsedEntries.map((entry) => ({
        ...entry,
        date: new Date(entry.date),
      }));
      setDiaryEntries(entriesWithDates);
      console.log("=== Loaded Diary Entries ===");
      console.log("Total entries:", entriesWithDates.length);
      console.log("Entries:", entriesWithDates);
      console.log("=======================");
    } else {
      console.log("No diary entries found in storage");
    }
  }, []);

  // Function to add a new diary entry
  const addDiaryEntry = (formData) => {
    // Create a new entry with a unique ID and the form data
    const entryToAdd = {
      id: Date.now(), // Unique identifier for the entry
      createdAt: new Date().toISOString(), // When the entry was created
      title: formData.title,
      date: formData.date,
      imageUrl: formData.imageUrl,
      text: formData.text,
    };

    // Update state and localStorage
    const updatedEntries = [...diaryEntries, entryToAdd];
    setDiaryEntries(updatedEntries);
    localStorage.setItem("diaryEntries", JSON.stringify(updatedEntries));

    // Simple verification log
    console.log("Entry added successfully:", entryToAdd);
  };
  */

  const handleAddEntry = (newEntry) => {
    saveEntry(newEntry); // save new entry
    setEntries(loadEntries()); // Reload entries
    setIsAddEntryOpen(false); // Close the modal
  };

  return (
    <div className="min-h-screen bg-gradient">
      <header className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-highlight mb-8">MyDiary</h1>
        <button
          className="add-entry-btn"
          onClick={() => setIsAddEntryOpen(true)}
          /*onClick={() => {
            const sampleEntry = {
              title: "Sample Diary Entry",
              date: new Date(),
              imageUrl: "https://picsum.photos/400/300",
              text: "This is a sample diary entry for testing purposes. It will be replaced by the actual form once implemented."
            };
            addDiaryEntry(sampleEntry);
          }}*/
        >
          Add Entry
        </button>

        {isAddEntryOpen && (
          <AddEntry
            onAddEntry={handleAddEntry}
            onCancel={() => setIsAddEntryOpen(false)}
          />
        )}
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <Calendar
              className="rounded-lg shadow-lg p-4 bg-white"
              tileClassName="hover:bg-blue-100 rounded-full"
              activeTileClassName="bg-blue-500 text-white"
              /*tileContent={({ date }) => {
                const hasEntry = entries.some(
                  (entry) => entry.date.toDateString() === date.toDateString()
                );
                return hasEntry ? (
                  <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                ) : null;
              }}*/
            />
          </div>
          <div className="w-full md:w-2/3">
            <Entrylist />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
