import React, { useState } from "react";

const AddEntry = ({ onAddEntry, onCancel }) => {
  const today = new Date().toLocaleDateString("sv-SE"); // Format to yyyy-mm-dd

  const [title, setTitle] = useState("");
  const [date, setDate] = useState(today);
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the local image
      setImage(imageUrl); // Store the image URL in your state
    }
  };

  const handleSubmit = () => {
    if (!title || !date || !image || !content) {
      setError("Please fill in all fields.");
      return;
    }

    const newEntry = { title, date, image, content };
    onAddEntry(newEntry);
  };

  return (
    <div className="fixed inset-0 bg-[#d4a8b4] bg-opacity-50 flex items-center justify-center">
      <div className="bg-[#082140] p-6 rounded-lg w-96 relative">
        <h2 className="text-2xl font-bold mb-4">New entry</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <p className="text-white">Title</p>
        <input
          type="text"
          className="w-full p-2 mb-4 bg-white rounded"
          placeholder="Enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="text-white">Date</p>
        <input
          type="date"
          className="w-full p-2 mb-4 bg-white rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <p className="text-white">Image</p>
        <input
          type="text"
          className="w-full p-2 mb-4 bg-white rounded"
          placeholder='Upload an image via "Choose file"'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label
          htmlFor="file-upload"
          className="flex items-center cursor-pointer mb-4 p-2 bg-[#c18234] text-white text-sm font-semibold rounded w-fit hover:bg-[#F0A240]"
        >
          Choose file
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <p className="text-white">Content</p>
        <textarea
          className="w-full p-2 mb-6 bg-white rounded"
          placeholder="Write your text here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="mb-4 p-2 bg-[#c18234] text-white text-sm rounded outline-none hover:bg-[#F0A240]"
          onClick={handleSubmit}
        >
          Save entry
        </button>
        <button
          className="mb-4 p-2 right-6 absolute bg-[#c18234] text-white text-sm rounded outline-none hover:bg-[#F0A240]"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddEntry;
