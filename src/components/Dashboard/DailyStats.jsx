import React, { useState } from "react";
import { toast } from "react-toastify";
import dailyApi from "../../api/daily";

const DailyStats = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const items = [
    { label: "Water", key: "water" },
    { label: "Steps", key: "steps" },
    { label: "Calories", key: "calories" },
    { label: "Sleep", key: "sleep" },
    { label: "Weight", key: "weight", allowNegative: true },
  ];

  const handleSave = async () => {
    try {
      setLoading(true);

      const value = Number(inputValue);

      if (inputValue === "" || isNaN(value)) {
        toast.error("Enter valid value");
        return;
      }

      // ❗ weight allow negative, others only positive
      if (activeModal.key !== "weight" && value <= 0) {
        toast.error("Enter valid value");
        return;
      }

      const payload = {
        [activeModal.key]: value,
      };

      const res = await dailyApi.post("/add", payload);

      const { message, status } = res.data;

      if (status === "limit") {
        toast.error(message || "Out of target");
      } else if (status === "done") {
        toast.info(message || "Target complete");
      } else {
        toast.success(message || "Added successfully");
      }

      window.dispatchEvent(new Event("daily-updated"));

      setActiveModal(null);
      setInputValue("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">

      {/* Buttons */}
      <div className="flex gap-2 overflow-x-auto">
        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => {
              setActiveModal(item);
              setInputValue("");
            }}
            className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-xs text-gray-300 hover:text-white"
          >
            + {item.label}
          </button>
        ))}
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl w-[90%] max-w-sm">

            <h2 className="text-orange-400 font-semibold text-lg mb-4">
              Add {activeModal.label}
            </h2>

            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={
                activeModal.key === "weight"
                  ? "Enter weight (+ or - allowed)"
                  : `Enter ${activeModal.label}`
              }
              className="w-full bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl text-white outline-none"
            />

            {activeModal.key === "weight" && (
              <p className="text-xs text-gray-400 mt-2">
                Weight Gain + ,  Weight Loss - (e.g. -1 or +2)
              </p>
            )}

            <div className="flex gap-3 mt-5">

              <button
                onClick={handleSave}
                disabled={loading}
                className="flex-1 bg-orange-400 text-black py-2 rounded-xl font-semibold disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save"}
              </button>

              <button
                onClick={() => {
                  setActiveModal(null);
                  setInputValue("");
                }}
                className="flex-1 bg-gray-800 border border-gray-700 py-2 rounded-xl text-gray-300"
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default DailyStats;