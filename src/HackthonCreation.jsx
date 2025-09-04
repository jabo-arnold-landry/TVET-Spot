import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const CreateNewHackathon = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    field: "Engineering",
    pointsReward: "50",
    dueDate: "08/28/2025",
  });
  const [isFieldDropdownOpen, setIsFieldDropdownOpen] = useState(false);

  const fields = [
    "Engineering",
    "Healthcare",
    "Business",
    "Technology",
    "Education",
    "Agriculture",
    "Tourism",
    "IT & Software",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFieldSelect = (field) => {
    setFormData((prev) => ({
      ...prev,
      field: field,
    }));
    setIsFieldDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log("Creating hackathon:", formData);
    // Handle form submission here
    alert("Hackathon created successfully!");
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Create New Hackathon
      </h2>

      <div className="space-y-6">
        {/* Hackathon Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Hackathon Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter hackathon title..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe the hackathon objectives and requirements..."
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
          />
        </div>

        {/* Field and Points Reward Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Field
            </label>
            <div className="relative">
              <button
                onClick={() => setIsFieldDropdownOpen(!isFieldDropdownOpen)}
                className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                <span>{formData.field}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isFieldDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isFieldDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  {fields.map((field) => (
                    <button
                      key={field}
                      onClick={() => handleFieldSelect(field)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 first:rounded-t-md last:rounded-b-md ${
                        formData.field === field
                          ? "bg-green-50 text-green-700"
                          : "text-gray-700"
                      }`}
                    >
                      {field}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Points Reward */}
          <div>
            <label
              htmlFor="pointsReward"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Points Reward
            </label>
            <input
              type="number"
              id="pointsReward"
              name="pointsReward"
              value={formData.pointsReward}
              onChange={handleInputChange}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
        </div>

        {/* Due Date */}
        <div>
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Due Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleInputChange}
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Create Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
        >
          Create Hackathon
        </button>
      </div>
    </div>
  );
};

export default CreateNewHackathon;
