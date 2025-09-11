import React, { useState } from "react";

const SuccessStoryForm = () => {
  // State to manage form inputs and visibility
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // New state to manage the initial prompt view
  const [showForm, setShowForm] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would send this data to a database or an API endpoint here.
    // For this example, we'll just log it to the console.
    console.log("Success Story Submission:", { name, email, story });

    // Set submitted state to show a thank you message
    setSubmitted(true);

    // Optional: Reset form fields after submission
    setName("");
    setEmail("");
    setStory("");
  };

  return (
    <div className="flex items-center justify-center p-6 rounded-lg">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        {!showForm ? (
          // Initial view with a prompt and a button
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-display">
              Want to share your story or contribute to TVETSpot?
            </h2>
            <p className="text-gray-600 mb-6 font-body">
              Your journey is an inspiration to current students. Tell us about
              your success, and we'll help share your story on our platform.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="relative flex items-center justify-center rounded-lg px-4 py-2 sm:px-6 sm:py-3 font-bold text-sm sm:text-base transition-all duration-300 ease-in-out bg-[#387476] text-white shadow-[0_8px_0_0_#243642] active:translate-y-2 active:shadow-none transform-gpu group"
            >
              <span className="relative z-10 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                Share My Success Story
              </span>
              <span className="absolute inset-0 rounded-lg bg-[#387476] opacity-0 transition-all duration-500 ease-out group-hover:animate-ping"></span>
            </button>
          </div>
        ) : submitted ? (
          // Thank you message after form submission
          <div className="text-center p-8 bg-green-50 rounded-lg">
            <h3 className="text-2xl font-semibold text-green-700 font-display">
              Thank you for sharing!
            </h3>
            <p className="text-green-600 mt-2 font-body">
              Our team will review your story and contact you soon to feature
              it.
            </p>
          </div>
        ) : (
          // The actual form
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center font-display">
              Share Your Success Story
            </h2>
            <p className="text-gray-600 mb-6 text-center font-body">
              Please fill out this short form, and we'll be in touch.
            </p>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="story"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tell us about your success story (2-3 sentences)
              </label>
              <textarea
                id="story"
                name="story"
                rows="4"
                value={story}
                onChange={(e) => setStory(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
                placeholder="Briefly describe your success since graduating..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full relative flex items-center justify-center rounded-lg px-4 py-2 sm:px-6 sm:py-3 font-bold text-sm sm:text-base transition-all duration-300 ease-in-out bg-[#387476] text-white shadow-[0_8px_0_0_#243642] active:translate-y-2 active:shadow-none transform-gpu group"
            >
              <span className="relative z-10 transition-transform duration-300 ease-in-out transform group-hover:scale-105">
                Submit My Story
              </span>
              <span className="absolute inset-0 rounded-lg bg-[#387476] opacity-0 transition-all duration-500 ease-out group-hover:animate-ping"></span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SuccessStoryForm;
