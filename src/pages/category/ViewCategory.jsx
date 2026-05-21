import React, { useEffect, useMemo, useState } from "react";
import categoryApi from "../../api/category";
import AddCategory from "./AddCategory";

const ViewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  // FETCH CATEGORIES
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

  // SEARCH FILTER
  const filteredCategories = useMemo(() => {
    return categories.filter((c) =>
      c.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, categories]);

  // DOWNLOAD CSV
  const downloadCSV = () => {
    const headers = "ID,Category\n";

    const rows = categories
      .map((cat) => `${cat._id},${cat.category}`)
      .join("\n");

    const csvContent = headers + rows;

    const blob = new Blob([csvContent], { type: "text/csv" });

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `categories_${Date.now()}.csv`;
    a.click();

    window.URL.revokeObjectURL(url);
  };

  // DELETE CATEGORY
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );

    if (!confirmDelete) return;

    try {
      await categoryApi.delete(`/category/delete/${id}`);

      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-6">
        <div>
          <h1 className="text-2xl font-bold">View Categories</h1>

          <p className="text-sm text-gray-400">
            Manage all workout categories
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            + Add Category
          </button>

          <button
            onClick={downloadCSV}
            className="bg-orange-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-orange-500 transition"
          >
            Download CSV 📥
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search category..."
          className="w-full sm:w-80 bg-gray-900 border border-gray-800 px-4 py-2 rounded-xl text-sm outline-none focus:border-orange-400"
        />

        <div className="text-xs text-gray-400">
          Total:{" "}
          <span className="text-white font-bold">
            {categories.length}
          </span>
        </div>

        <div className="text-xs text-gray-400">
          Showing:{" "}
          <span className="text-orange-400 font-bold">
            {filteredCategories.length}
          </span>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="p-3 text-left">Category</th>

              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredCategories.length === 0 ? (
              <tr>
                <td
                  colSpan="2"
                  className="text-center py-10 text-gray-500"
                >
                  No categories found
                </td>
              </tr>
            ) : (
              filteredCategories.map((cat) => (
                <tr
                  key={cat._id}
                  className="border-t border-gray-800 hover:bg-gray-800/60 transition"
                >
                  <td className="p-3 font-medium">
                    <span className="bg-gray-800 px-2 py-1 rounded-lg text-xs">
                      {cat.category}
                    </span>
                  </td>

                  <td className="p-3 text-right">
                    <button
                      onClick={() => handleDelete(cat._id)}
                      className="text-red-400 hover:text-red-500 text-xs font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <AddCategory
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={(newCategory) =>
          setCategories((prev) => [...prev, newCategory])
        }
      />
    </div>
  );
};

export default ViewCategory;