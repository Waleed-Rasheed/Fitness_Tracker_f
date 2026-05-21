import React, { useEffect, useState } from "react";
import categoryApi from "../../api/category.js";
import exerciseApi from "../../api/exercise.js";

const AddExercise = ({ show, onClose, onAdd }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    category: "",
    difficulty: "Intermediate",
    equipment: "",
    sets: "",
    reps: "",
    tags: "",
    instructions: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await categoryApi.get("/category/all");
        setCategories(res.data.data || []);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };

    fetchCategories();
  }, []);

  if (!show) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await exerciseApi.post(
        "/exercise/add",
        form
      );

      if (onAdd) {
        onAdd(res.data.data);
      }

      setForm({
        name: "",
        category: "",
        difficulty: "Intermediate",
        equipment: "",
        sets: "",
        reps: "",
        tags: "",
        instructions: "",
      });

      onClose();

    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">

      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-5">

        <div className="mb-4">
          <h1 className="text-xl font-bold text-white">
            Add Exercise
          </h1>

          <p className="text-xs text-gray-400 mt-1">
            Create exercise entry
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            name="name"
            placeholder="Exercise name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-gray-800 text-gray-100 border border-gray-700 focus:border-orange-400 outline-none px-4 py-2.5 rounded-xl text-sm"
          />

          <div className="grid grid-cols-2 gap-3">

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full bg-gray-800 text-gray-100 border border-gray-700 focus:border-orange-400 outline-none px-4 py-2.5 rounded-xl text-sm"
            >
              <option value="">
                Select Category
              </option>

              {categories.map((cat) => (
                <option
                  key={cat._id}
                  value={cat._id}
                >
                  {cat.category}
                </option>
              ))}
            </select>

            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className="w-full bg-gray-800 text-gray-100 border border-gray-700 focus:border-orange-400 outline-none px-4 py-2.5 rounded-xl text-sm"
            >
              <option>
                Beginner
              </option>

              <option>
                Intermediate
              </option>

              <option>
                Advanced
              </option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <input
              type="number"
              name="sets"
              placeholder="Sets"
              value={form.sets}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 focus:border-orange-400 px-4 py-2.5 rounded-xl text-sm outline-none"
            />

            <input
              type="number"
              name="reps"
              placeholder="Reps"
              value={form.reps}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 focus:border-orange-400 px-4 py-2.5 rounded-xl text-sm outline-none"
            />
          </div>

          <input
            name="equipment"
            placeholder="Equipment"
            value={form.equipment}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 focus:border-orange-400 px-4 py-2.5 rounded-xl text-sm outline-none"
          />

          <textarea
            name="instructions"
            placeholder="Instructions..."
            value={form.instructions}
            onChange={handleChange}
            rows={3}
            className="w-full bg-gray-800 border border-gray-700 focus:border-orange-400 px-4 py-2.5 rounded-xl text-sm outline-none"
          />

          <input
            name="tags"
            placeholder="Tags"
            value={form.tags}
            onChange={handleChange}
            className="w-full bg-gray-800 border border-gray-700 focus:border-orange-400 px-4 py-2.5 rounded-xl text-sm outline-none"
          />

          <div className="flex justify-end gap-3 pt-2">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-gray-700 transition text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2 bg-orange-400 text-black font-semibold rounded-xl hover:bg-orange-500 transition disabled:opacity-50 text-sm"
            >
              {loading
                ? "Saving..."
                : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExercise;