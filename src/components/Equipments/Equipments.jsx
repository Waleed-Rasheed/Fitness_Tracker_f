import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLift } from "../../utiility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "Premium yoga tools designed for flexibility, balance, and calm training.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscle Equipments",
    desc: "High-performance gear for strength training and muscle building.",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Gear",
    desc: "All-in-one fitness equipment for home and gym workouts.",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <section className="relative py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-orange-400/20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch">

          {/* Intro Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black text-white border border-white/10 shadow-xl flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              What We Offer For You
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Premium fitness equipment designed to improve strength, flexibility,
              and overall performance.
            </p>
          </div>

          {/* Feature Cards */}
          {EquipmentData.map((item) => (
            <motion.div
              key={item.id}
              variants={SlideLift(item.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative p-7 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white shadow-lg hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Icon */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-orange-500/10 text-orange-500 text-2xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="relative text-xl font-semibold mb-2">
                {item.title}
              </h2>

              {/* Description */}
              <p className="relative text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Equipments;