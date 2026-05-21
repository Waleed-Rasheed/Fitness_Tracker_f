import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const WeightSection = () => {
  const [goal, setGoal] = useState({});
  const [weights, setWeights] = useState([]);

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const [goalRes, dailyRes] = await Promise.all([
        axios.get("http://localhost:8080/api/goal/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get("http://localhost:8080/api/daily/get", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      setGoal(goalRes.data?.data || {});

      const history = dailyRes.data?.data?.weightHistory || [];

      const values = history.map((item) => item.value);

      setWeights(values);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();

    window.addEventListener("daily-updated", fetchData);
    window.addEventListener("goals-updated", fetchData);

    return () => {
      window.removeEventListener("daily-updated", fetchData);
      window.removeEventListener("goals-updated", fetchData);
    };
  }, []);

  const labels = weights.map((_, i) => `Day ${i + 1}`);

  const currentWeight = weights.at(-1) || 0;
  const startWeight = weights[0] || currentWeight;
  const targetWeight = goal?.weight || 0;

  const mode = currentWeight < startWeight ? "loss" : "gain";

  const data = {
    labels,
    datasets: [
      {
        data: weights,
        borderColor: "#fb923c",
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 4,
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-gray-900 p-5 rounded-2xl border border-gray-800">

      <div className="flex justify-between mb-3">
        <h3 className="text-gray-300 font-bold">Weight Progress</h3>

        <div className={`px-3 py-1 text-xs rounded ${
          mode === "loss"
            ? "bg-green-500/20 text-green-400"
            : "bg-orange-500/20 text-orange-400"
        }`}>
          {mode === "loss" ? "Loss 📉" : "Gain 📈"}
        </div>
      </div>

      <div className="mb-3 bg-gray-800 p-3 rounded-xl">
        <p className="text-xs text-gray-400">Target Weight</p>
        <p className="text-orange-400 font-bold">{targetWeight} kg</p>
      </div>

      <p className="text-white text-xl font-bold">{currentWeight} kg</p>

      <div className="h-56">
        <Line data={data} />
      </div>

    </div>
  );
};

export default WeightSection;