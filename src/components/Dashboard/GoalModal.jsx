import React, { useState } from "react";
import goalApi from "../../api/goal";

const GoalModal = ({ open, onClose }) => {
  const [goals, setGoals] = useState({
    water: "",
    steps: "",
    calories: "",
    sleep: "",
    weight: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setGoals({
      ...goals,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const payload = {
        water: Number(goals.water) || 0,
        steps: Number(goals.steps) || 0,
        calories: Number(goals.calories) || 0,
        sleep: Number(goals.sleep) || 0,
        weight: Number(goals.weight) || 0,
      };

      await goalApi.post("/goal/save", payload);

      window.dispatchEvent(new Event("goals-updated"));
      window.dispatchEvent(new Event("daily-updated"));

      onClose();
    } catch (error) {
      console.log(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-gray-900 border border-gray-800 w-[92%] max-w-md rounded-2xl p-6">

        <h2 className="text-lg font-bold text-orange-400 mb-4">
          Set Daily Targets 🎯
        </h2>

        <div className="space-y-3">

          <input
            name="water"
            value={goals.water}
            onChange={handleChange}
            placeholder="Water Target (Liters)"
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
          />

          <input
            name="steps"
            value={goals.steps}
            onChange={handleChange}
            placeholder="Steps Target"
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
          />

          <input
            name="calories"
            value={goals.calories}
            onChange={handleChange}
            placeholder="Calories Target"
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
          />

          <input
            name="sleep"
            value={goals.sleep}
            onChange={handleChange}
            placeholder="Sleep Target (Hours)"
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
          />

          <input
            name="weight"
            value={goals.weight}
            onChange={handleChange}
            placeholder="Weight Target (Kg)"
            className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
          />

        </div>

        <div className="flex gap-2 mt-5">

          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-1 bg-orange-400 text-black py-2 rounded-xl font-semibold hover:bg-orange-500 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Targets"}
          </button>

          <button
            onClick={onClose}
            className="flex-1 bg-gray-800 border border-gray-700 text-white py-2 rounded-xl hover:bg-gray-700"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default GoalModal;