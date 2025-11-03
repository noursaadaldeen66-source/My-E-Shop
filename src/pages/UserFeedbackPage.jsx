import React, { useState } from "react";
import useFeedbackStore from "../store/feedbackStore";

const UserFeedbackPage = () => {
  const { feedbacks, addFeedback, updateFeedback, deleteFeedback } =
    useFeedbackStore();
  const [feedbackText, setFeedbackText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleAddFeedback = () => {
    if (feedbackText) {
      addFeedback({ text: feedbackText });
      setFeedbackText("");
    }
  };

  const handleEdit = (feedback) => {
    setEditingId(feedback.id);
    setEditingText(feedback.text);
  };

  const handleSave = (id) => {
    updateFeedback(id, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className=" text-blue-600">
      <h1 className="text-2xl font-bold mb-4 ">User Feedback System</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your feedback"
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddFeedback}
          className="bg-blue-500 text-white p-2"
        >
          Add Feedback
        </button>
      </div>
      <div>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="border p-4 mb-4">
            {editingId === feedback.id ? (
              <div>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="border p-2 mr-2"
                />
                <button
                  onClick={() => handleSave(feedback.id)}
                  className="bg-green-500 text-white p-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>{feedback.text}</p>
                <div className="mt-2">
                  <button
                    onClick={() => handleEdit(feedback)}
                    className="bg-yellow-500 text-white p-2 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteFeedback(feedback.id)}
                    className="bg-red-500 text-white p-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFeedbackPage;
