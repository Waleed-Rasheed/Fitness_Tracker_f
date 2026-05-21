import React from 'react'
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png"
import { motion } from "framer-motion";
import { SlideLift, SlideRight } from '../../utiility/animation';

const Hero = () => {
  return (
    <section className="relative">

      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center gap-10 text-white'>

        {/* TEXT SECTION */}
        <div className="flex flex-col justify-center font-serif space-y-6">

          <div className="text-center md:text-left space-y-6">

            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight"
            >
              <span className="text-orange-500">Gym</span>{" "}
              Gives You The Perfect{" "}
              <span className="text-orange-500">Health</span>
            </motion.h1>

            <motion.p
              variants={SlideRight(1.2)}
              initial="hidden"
              animate="visible"
              className='text-gray-300 max-w-[500px] mx-auto md:mx-0 font-medium leading-relaxed'>
              It is a long established fact that a reader will be distracted by readable content of a page when looking at its layout.
            </motion.p>

            <motion.div
              variants={SlideRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start items-center gap-6 mt-4">

              <button className='bg-orange-500 text-white px-6 py-3 rounded-full font-semibold 
              hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-md'>
                Order Now
              </button>

              <button className='flex items-center gap-2 text-gray-400 font-semibold 
              hover:text-orange-500 transition'>
                <span className='bg-white shadow-md p-3 rounded-full'>
                  <FaPlay />
                </span>
                Watch Video
              </button>

            </motion.div>

          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center relative">

          <div className="absolute w-[300px] h-[300px] bg-orange-500/20 blur-3xl rounded-full"></div>

          <motion.img
            initial={{ opacity: 0, x: -100, rotate: -50 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.5 }}
            src={HeroImg}
            alt="Gym dumbbell illustration"
            className="w-[350px] md:w-[450px] xl:w-[500px] object-contain"
          />
        </div>

      </div>
    </section>
  )
}

export default Hero