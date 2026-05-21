import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from "framer-motion";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <section id="product" className="relative py-28 overflow-hidden bg-black">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/20 blur-[140px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore Our <span className="text-orange-500">Products</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Premium gym equipment for strength, endurance & performance
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-7 py-2 rounded-full font-semibold transition-all duration-300 border backdrop-blur
              ${
                activeTab === tab
                  ? "bg-orange-500 text-black border-orange-500 shadow-lg shadow-orange-500/30 scale-105"
                  : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab}

              {/* Active glow dot */}
              {activeTab === tab && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full blur-sm"></span>
              )}
            </button>
          ))}

        </div>

        {/* Empty State */}
        {filteredCards.length === 0 ? (
          <div className="text-center text-gray-400">
            No products found in this category.
          </div>
        ) : (
          /* Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300"
              >

                {/* IMAGE SECTION */}
                <div className="relative overflow-hidden">

                  {/* Category badge */}
                  <span className="absolute top-4 left-4 z-10 bg-black/60 text-white text-xs px-3 py-1 rounded-full border border-white/10 backdrop-blur">
                    {card.category}
                  </span>

                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-[260px] w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]"></div>

                </div>

                {/* CONTENT */}
                <div className="p-6 space-y-3">

                  <h2 className="text-xl font-bold text-white group-hover:text-orange-500 transition">
                    {card.title}
                  </h2>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    High-quality gym equipment designed for performance, durability and strength training.
                  </p>

                  {/* CTA */}
                  <div className="pt-2 flex justify-between items-center">

                    <button className="text-sm font-semibold text-orange-500 hover:text-orange-400 transition flex items-center gap-1">
                      View Details <span className="group-hover:translate-x-1 transition">→</span>
                    </button>

                    <span className="text-xs text-gray-500">
                      Premium Gear
                    </span>

                  </div>

                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all duration-500"></div>

              </motion.div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
};

export default TabComp;