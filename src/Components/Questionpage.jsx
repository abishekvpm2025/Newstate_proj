import React, { useState } from "react";  // <-- Add useState here

const QuestionPage = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(true);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">Q&A Page</h1>
      <button
        onClick={handleClick}
        className="px-6 py-2 bg-purple-600 text-white rounded-lg"
      >
        Show Q&A
      </button>

      {/* Loading state */}
      {loading && <p className="text-lg animate-pulse">Loading...</p>}

      {/* Show Q&A after loading */}
      {show && (
        <div className="bg-white text-black p-4 rounded-lg shadow w-80">
          <p className="font-bold">Q: What is React?</p>
          <p className="mb-2">A: React is a JavaScript library for UI.</p>
          <p className="font-bold">Q: What is State?</p>
          <p>A: State is data that changes in a component.</p>
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
