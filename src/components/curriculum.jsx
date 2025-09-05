import React, { useState } from "react";

const CurriculumSuggestion = () => {
  const [title, setTitle] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !suggestion.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    // Log suggestion instead of displaying
    console.log("Submitted Suggestion:", { title, suggestion });

    // Reset form fields
    setTitle("");
    setSuggestion("");

    
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 mt-6">
      <h2 className="text-lg font-semibold mb-4">Curriculum Suggestion</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Suggestion title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-2 outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Suggest improvements to curriculum or facilities..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          className="w-full border rounded-md p-2 h-24 outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          className="bg-green-500 text-white w-full rounded-md py-2 hover:bg-green-600 transition"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
};

export default CurriculumSuggestion;
