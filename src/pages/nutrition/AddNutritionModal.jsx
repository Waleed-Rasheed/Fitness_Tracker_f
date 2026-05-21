import React, { useState } from "react";
import nutritionApi from "../../api/nutrition.js";

const AddNutritionModal = ({ open, onClose, onAdd, activeType }) => {
  const [form, setForm] = useState({
    nName: "",
    nCalories: "",
    nProtein: "",
  });

  const [error, setError] = useState("");

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await nutritionApi.post("/nutrition/add", {
        ...form,
        type: activeType,
      });

      onAdd(res.data.data);

      setForm({
        nName: "",
        nCalories: "",
        nProtein: "",
      });

      onClose();
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl w-[90%] max-w-md shadow-2xl">

        <h2 className="text-lg font-bold text-orange-400 mb-4">
          Add {activeType} Meal
        </h2>

        {error && (
          <div className="mb-3 bg-red-500/10 border border-red-500 text-red-400 px-3 py-2 rounded-xl text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">

          <input
            name="nName"
            value={form.nName}
            onChange={handleChange}
            placeholder="Meal Name"
            className="w-full p-3 bg-black border border-gray-800 rounded-xl outline-none focus:border-orange-400"
          />

          <input
            name="nCalories"
            value={form.nCalories}
            onChange={handleChange}
            placeholder="Calories"
            className="w-full p-3 bg-black border border-gray-800 rounded-xl outline-none focus:border-orange-400"
          />

          <input
            name="nProtein"
            value={form.nProtein}
            onChange={handleChange}
            placeholder="Protein"
            className="w-full p-3 bg-black border border-gray-800 rounded-xl outline-none focus:border-orange-400"
          />

          <div className="flex gap-2 pt-2">

            <button
              type="submit"
              className="flex-1 bg-orange-400 hover:bg-orange-500 transition text-black py-2 rounded-xl font-semibold"
            >
              Add
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-800 hover:bg-gray-700 transition py-2 rounded-xl"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default AddNutritionModal;