import React, { useState, useEffect, useMemo } from "react";

const BmiModal = ({ open, onClose, onSave }) => {
  const [data, setData] = useState({ height: "", weight: "" });

  const bmi = useMemo(() => {
    const h = data.height / 100;
    const w = data.weight;

    if (!h || !w) return null;

    return (w / (h * h)).toFixed(1);
  }, [data]);

  const status = useMemo(() => {
    const value = Number(bmi);

    if (!value) return "";

    if (value < 18.5) return "Underweight";
    if (value < 25) return "Normal";
    if (value < 30) return "Overweight";
    return "Obese";
  }, [bmi]);

  const progress = useMemo(() => {
    if (!bmi) return 0;

    const val = Math.min((bmi / 40) * 100, 100);
    return val;
  }, [bmi]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="relative bg-gray-900 border border-gray-800 p-5 rounded-2xl w-[90%] max-w-sm">

        {/* ❌ CLOSE BUTTON (ADDED ONLY) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-lg"
        >
          ✕
        </button>

        <h2 className="text-orange-400 font-bold mb-4 text-sm">
          BMI Calculator
        </h2>

        <input
          name="height"
          value={data.height}
          onChange={handleChange}
          placeholder="Height (cm)"
          className="w-full mb-3 bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
        />

        <input
          name="weight"
          value={data.weight}
          onChange={handleChange}
          placeholder="Weight (kg)"
          className="w-full bg-gray-800 border border-gray-700 px-3 py-2 rounded-xl text-sm text-white"
        />

        {/* LIVE RESULT */}
        {bmi && (
          <div className="mt-4">

            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>BMI</span>
              <span className="text-white font-bold">{bmi}</span>
            </div>

            <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-orange-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2 text-center">
              <span
                className={`text-xs font-semibold ${
                  status === "Normal"
                    ? "text-green-400"
                    : status === "Underweight"
                    ? "text-blue-400"
                    : status === "Overweight"
                    ? "text-yellow-400"
                    : "text-red-400"
                }`}
              >
                {status}
              </span>
            </div>

            <div className="text-[10px] text-gray-500 mt-2 space-y-1">
              <p><span className="text-green-400">Normal:</span> 18.5 – 24.9</p>
              <p><span className="text-yellow-400">Average:</span> 25 – 29.9</p>
              <p><span className="text-red-400">High:</span> 30+</p>
            </div>

          </div>
        )}

        {/* SAVE BUTTON */}
        <button
          onClick={() => {
            if (bmi) {
              onSave({
                height: data.height,
                weight: data.weight,
              });
            }
            onClose();
          }}
          className="w-full mt-4 bg-orange-400 text-black py-2 rounded-xl font-semibold"
        >
          Save
        </button>

      </div>

    </div>
  );
};

export default BmiModal;