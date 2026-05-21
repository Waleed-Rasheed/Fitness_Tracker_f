import React, { useEffect, useMemo, useState } from "react";
import {
  FaSearch,
  FaFileCsv,
  FaTrash,
  FaDumbbell,
  FaPlus,
  FaListUl,
} from "react-icons/fa";
import exerciseApi from "../../api/exercise";
import AddExercise from "./AddExercise";

const ViewExercise = () => {
  const [exercises, setExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchExercises();
    fetchCategories();
  }, []);

  const fetchExercises = async () => {
    try {
      const res = await exerciseApi.get("/exercise/all");
      setExercises(res.data?.data || []);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await exerciseApi.get("/category/all");
      setCategories(res.data?.data || []);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCategoryName = (ex) => {
    if (!ex.category) return "-";

    if (typeof ex.category === "object") {
      return ex.category.name || ex.category.category || "-";
    }

    return ex.category;
  };

  const filteredExercises = useMemo(() => {
    return exercises.filter((ex) => {
      const catName = getCategoryName(ex);

      const matchSearch =
        ex.name?.toLowerCase().includes(search.toLowerCase()) ||
        catName.toLowerCase().includes(search.toLowerCase()) ||
        (ex.equipment || "").toLowerCase().includes(search.toLowerCase());

      const matchCategory =
        categoryFilter === "All" || catName === categoryFilter;

      return matchSearch && matchCategory;
    });
  }, [search, exercises, categoryFilter]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this exercise?")) return;

    try {
      const res = await exerciseApi.delete(`/exercise/delete/${id}`);

      if (res.data?.success) {
        setExercises((prev) => prev.filter((e) => e._id !== id));
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const downloadCSV = () => {
    const header = ["Name", "Category", "Sets", "Reps", "Equipment", "Difficulty"];

    const rows = filteredExercises.map((e) => [
      e.name,
      getCategoryName(e),
      e.sets,
      e.reps,
      e.equipment || "",
      e.difficulty || "",
    ]);

    const csv = [header, ...rows].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "exercises.csv";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-black to-gray-950 text-white p-4 sm:p-6">

      <div className="relative bg-gray-900/60 border border-gray-800 rounded-3xl p-5 overflow-hidden">

        <div className="absolute w-72 h-72 bg-orange-500/10 blur-3xl -top-20 -right-20" />

        <div className="relative flex flex-col lg:flex-row justify-between gap-4">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <FaDumbbell className="text-orange-400 text-xl" />
            </div>

            <div>
              <h1 className="text-2xl font-bold">
                Exercise <span className="text-orange-400">Manager</span>
              </h1>
              <p className="text-gray-400 text-sm">
                Manage workouts easily
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-xl font-semibold"
            >
              <FaPlus /> Add
            </button>

            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-xl font-semibold"
            >
              <FaFileCsv /> CSV
            </button>
          </div>

        </div>

        <div className="flex flex-col lg:flex-row gap-3 mt-5">

          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-3 text-gray-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercises..."
              className="w-full bg-black border border-gray-800 rounded-xl pl-10 py-2 outline-none focus:border-orange-500"
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="bg-black border border-gray-800 px-4 py-2 rounded-xl"
          >
            <option value="All">All Categories</option>

            {categories.map((c) => (
              <option key={c._id} value={c.name || c.category}>
                {c.name || c.category}
              </option>
            ))}
          </select>

          <div className="flex items-center text-gray-400 bg-gray-800 px-3 py-2 rounded-xl">
            <FaListUl className="mr-2" />
            <span className="text-white font-bold">
              {filteredExercises.length}
            </span>
          </div>

        </div>
      </div>

      {loading && (
        <div className="text-center py-10 text-gray-400">
          Loading...
        </div>
      )}

      {!loading && (
        <div className="mt-6 bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-sm">

              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Category</th>
                  <th className="p-4 text-left">Sets</th>
                  <th className="p-4 text-left">Reps</th>
                  <th className="p-4 text-left">Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredExercises.length > 0 ? (
                  filteredExercises.map((e) => (
                    <tr key={e._id} className="border-t border-gray-800 hover:bg-gray-800/40 transition">

                      <td className="p-4 font-medium">
                        {e.name}
                      </td>

                      <td className="p-4 text-gray-300">
                        {getCategoryName(e)}
                      </td>

                      <td className="p-4">
                        {e.sets}
                      </td>

                      <td className="p-4">
                        {e.reps}
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(e._id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <FaTrash />
                        </button>
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-10 text-gray-500">
                      No exercises found
                    </td>
                  </tr>
                )}

              </tbody>

            </table>

          </div>

        </div>
      )}

      <AddExercise
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={(newEx) => setExercises((prev) => [newEx, ...prev])}
      />

    </div>
  );
};

export default ViewExercise;