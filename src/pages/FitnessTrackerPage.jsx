import React, { useState, useEffect } from "react";
import useFitnessStore from "../store/fitnessStore";

const FitnessTrackerPage = () => {
  const { activities, addActivity, getDailyProgress, hasMetGoal, dailyGoal } =
    useFitnessStore();
  const [activityType, setActivityType] = useState("");
  const [time, setTime] = useState("");
  const [steps, setSteps] = useState("");

  const totalSteps = getDailyProgress();
  const goalMet = hasMetGoal();

  const handleAddActivity = () => {
    if (activityType && time && steps) {
      addActivity({ activityType, time, steps: parseInt(steps) });
      setActivityType("");
      setTime("");
      setSteps("");
    }
  };

  useEffect(() => {
    if (goalMet) {
      alert("Congratulations! You have reached your daily goal.");
    }
  }, [goalMet]);

  return (
    <div className="text-blue-600 ">
      <h1 className="text-2xl font-bold mb-4">Fitness Tracker</h1>
      <div className="mb-4  w-screen">
        <input
          type="text"
          placeholder="Activity Type"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Number of Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddActivity}
          className="bg-blue-500 text-white p-2"
        >
          Add Activity
        </button>
      </div>
      <div className="mb-4  text-blue-600">
        <h2 className="text-xl font-bold">Activity Summary</h2>
        <p>Total Steps: {totalSteps}</p>
        <p>Daily Goal: {dailyGoal} steps</p>
        {goalMet && <p className="text-green-500">Goal Reached!</p>}
      </div>
      <div>
        <h2 className="text-xl font-bold">Activity List</h2>
        {activities.map((activity) => (
          <div key={activity.id} className="border p-4 mb-4  text-blue-600">
            <p>
              <strong>Activity:</strong> {activity.activityType}
            </p>
            <p>
              <strong>Time:</strong> {activity.time}
            </p>
            <p>
              <strong>Steps:</strong> {activity.steps}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FitnessTrackerPage;
