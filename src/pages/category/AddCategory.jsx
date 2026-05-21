import React, { useState } from "react";
import { FaPlus, FaLayerGroup, FaBroom } from "react-icons/fa";
import categoryApi from "../../api/category";

const AddCategory = ({ show, onClose, onAdd }) => {
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmed = category.trim();

    if (!trimmed) return;

    try {
      setLoading(true);

      const { data } = await categoryApi.post("/category/add", {
        category: trimmed,
      });

      if (onAdd) {
        onAdd(data.data);
      }

      setCategory("");
      onClose();

    } catch (error) {
      alert(error.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

      <div className="w-full max-w-md bg-gray-950 border border-gray-800 rounded-2xl p-5">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-5">

          <div className="bg-orange-500/10 p-2.5 rounded-xl">
            <FaLayerGroup className="text-orange-400 text-lg" />
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white">
              Add <span className="text-orange-400">Category</span>
            </h1>

            <p className="text-xs text-gray-400">
              Create new workout category
            </p>
          </div>

        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="text-[11px] text-gray-400 uppercase">
              Category Name
            </label>

            <input
              type="text"
              placeholder="e.g. Chest, Cardio, Strength"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-2 bg-black text-white border border-gray-800 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400"
            />
          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => setCategory("")}
              className="flex items-center gap-2 px-4 py-2 text-xs rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              <FaBroom />
              Clear
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs rounded-xl bg-gray-800 text-white hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-5 py-2 text-xs rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-medium disabled:opacity-50"
            >
              <FaPlus />
              {loading ? "Adding..." : "Add"}
            </button>

          </div>
        </form>

      </div>
    </div>
  );
};

export default AddCategory;