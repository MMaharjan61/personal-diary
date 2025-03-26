import React, { useState } from "react";
import { loadEntries } from "./Storage";

const AddEntry = ({ onAddEntry, onCancel }) => {
  const today = new Date().toISOString().split("T")[0];
  const existingEntries = loadEntries();
  //const hasEntryToday = existingEntries.some((entry) => entry.date === today);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(today);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title || !date || !image || !content) {
      setError("Please fill in all fields.");
      return;
    }

    /*if (hasEntryToday) {
      setError(
        "You have already added an entry for today. Please come back tomorrow!"
      );
      return;
    }*/

    const newEntry = { title, date, image, content };
    onAddEntry(newEntry);
  };

  return (
    <div className="fixed inset-0 bg-[#d4a8b4] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#082140] p-6 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-4">New entry</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          className="w-full p-2 mb-4 bg-white rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 mb-4 bg-white rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 mb-4 bg-white rounded"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-4 bg-white rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="px-2 py-1 border-[#F0A240] text-[#F0A240] text-sm rounded hover:bg-[#c18234] hover:text-[#FFFFFF]"
          onClick={handleSubmit}
        >
          Save entry
        </button>
        <button
          className="absolute bottom-6 right-6 px-2 py-1 border-[#F0A240] text-[#F0A240] text-sm rounded hover:bg-[#c18234] hover:text-[#FFFFFF]"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEntry;
