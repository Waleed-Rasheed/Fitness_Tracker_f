import React, { useEffect, useState } from "react";
import nutritionApi from "../../api/nutrition.js";
import { FaTrash, FaAppleAlt, FaPlus } from "react-icons/fa";
import AddNutritionModal from "./AddNutritionModal.jsx";

const NutritionView = () => {
  const [meals, setMeals] = useState([]);
  const [active, setActive] = useState("Breakfast");
  const [openModal, setOpenModal] = useState(false);

  const categories = ["Breakfast", "Lunch", "Dinner", "Snacks"];

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const res = await nutritionApi.get("/nutrition/all");
      setMeals(res.data.data || []);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await nutritionApi.delete(`/nutrition/delete/${id}`);
      setMeals((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const filtered = meals.filter((m) => m.type === active);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-950 text-white p-4 sm:p-6">

      <div className="max-w-6xl mx-auto">

        <div className="relative overflow-hidden bg-gray-900/70 border border-gray-800 rounded-3xl p-6 shadow-2xl">

          <div className="absolute w-72 h-72 bg-orange-500/10 blur-3xl -top-20 -right-20" />

          <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/15 border border-orange-500/20 flex items-center justify-center">
                <FaAppleAlt className="text-orange-400 text-xl" />
              </div>

              <div>
                <h1 className="text-2xl font-bold">
                  Nutrition <span className="text-orange-400">Tracker</span>
                </h1>
                <p className="text-gray-400 text-sm">
                  Track your meals easily
                </p>
              </div>
            </div>

            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 transition text-black px-5 py-2.5 rounded-2xl font-semibold shadow-lg"
            >
              <FaPlus /> Add Nutrition
            </button>

          </div>
        </div>

        <div className="flex gap-2 mt-6 flex-wrap">
          {categories.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition border ${
                active === t
                  ? "bg-orange-400 text-black border-orange-400 shadow-md"
                  : "bg-gray-900 border-gray-800 text-gray-300 hover:border-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl">

          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <h2 className="text-sm text-gray-300">
              {active} Meals
            </h2>

            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300">
              {filtered.length} items
            </span>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-sm">

              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="p-4 text-left">Meal</th>
                  <th className="p-4 text-left">Calories</th>
                  <th className="p-4 text-left">Protein</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {filtered.length > 0 ? (
                  filtered.map((m) => (
                    <tr
                      key={m._id}
                      className="border-t border-gray-800 hover:bg-gray-800/40 transition"
                    >
                      <td className="p-4 font-medium">{m.nName}</td>

                      <td className="p-4 text-gray-300">
                        {m.nCalories} kcal
                      </td>

                      <td className="p-4 text-gray-300">
                        {m.nProtein} g
                      </td>

                      <td className="p-4">
                        <span className="px-3 py-1 text-xs rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          {m.type}
                        </span>
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(m._id)}
                          className="w-9 h-9 flex items-center justify-center rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-12 text-gray-500">
                      No meals found
                    </td>
                  </tr>
                )}
              </tbody>

            </table>

          </div>
        </div>

      </div>

      <AddNutritionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAdd={(newMeal) =>
          setMeals((prev) => [newMeal, ...prev])
        }
        activeType={active}
      />

    </div>
  );
};

export default NutritionView;