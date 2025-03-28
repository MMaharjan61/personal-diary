import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Entrylist from "./componentsNew/Entrylist";
import AddEntry from "./componentsNew/AddEntry";
import ShowInfo from "./componentsNew/ShowInfo";
import DummyEntry from "./componentsNew/DummyEntries";
import { loadEntries, saveEntry } from "./componentsNew/Storage";

const App = () => {
  const [entries, setEntries] = useState([]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const savedEntries = loadEntries();
    setEntries(savedEntries);
    if (savedEntries.length === 0) {
      DummyEntry();
    }
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

  const handleDateChange = (date) => {
    const formattedDate = date.toLocaleDateString("sv-SE"); // Format to yyyy-mm-dd
    setFilter(formattedDate); // Set filter to selected date
  };
  const handleAddEntryClick = () => {
    const today = new Date().toLocaleDateString("sv-SE");
    const existingEntries = loadEntries();
    const hasEntryToday = existingEntries.some((entry) => entry.date === today);

    if (hasEntryToday) {
      setIsInfoOpen(true); // Show the info
    } else {
      setIsAddEntryOpen(true); // Open the modal to add a new entry
    }
  };

  const handleAddEntry = (newEntry) => {
    saveEntry(newEntry); // save new entry
    setEntries(loadEntries()); // Reload entries
    setIsAddEntryOpen(false); // Close the modal
  };

  const handleRemoveFilter = () => {
    setFilter(null);
  }; // remove filter

  return (
    <div className="min-h-screen bg-gradient">
      <header className="flex flex-col items-center justify-center pt-16 pb-12">
        <h1 className="text-highlight mb-8">MyDiary</h1>
        <button
          className="add-entry-btn"
          onClick={handleAddEntryClick}
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
        {isInfoOpen && <ShowInfo onClick={() => setIsInfoOpen(false)} />}
        {isAddEntryOpen && (
          <AddEntry
            onAddEntry={handleAddEntry}
            onCancel={() => setIsAddEntryOpen(false)}
          />
        )}
        <button className="mt-4" onClick={handleRemoveFilter}>
          Show all Entries{" "}
        </button>
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
            <Calendar
              onChange={handleDateChange}
              value={filter ? new Date(filter) : new Date()}
              tileClassName={({ date }) => {
                const formattedDate = date.toLocaleDateString("sv-SE");
                return filter === formattedDate
                  ? "bg-blue-500 text-white rounded-md"
                  : "";
              }}
              tileContent={({ date }) => {
                const formattedDate = date.toLocaleDateString("sv-SE"); // Format to yyyy-mm-dd
                const hasEntry = entries.some(
                  (entry) => entry.date === formattedDate
                );
                return hasEntry ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full mx-auto"></div>
                ) : null;
              }}
            />
          </div>
          <div className="w-full md:w-2/3">
            <Entrylist entries={entries} filter={filter} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
