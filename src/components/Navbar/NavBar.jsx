import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { CiDumbbell } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

          {/* LOGO */}
          <div className="flex items-center gap-2 text-white font-bold text-2xl uppercase">
            <CiDumbbell className="text-orange-500 text-3xl" />
            <span>Fitness</span>
            <span className="text-orange-500">Tracker</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-300">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hover:text-orange-500 transition relative group"
                  >
                    {item.title}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 group-hover:w-full transition-all"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            <button className="text-white text-xl hover:text-orange-500 p-2 rounded-full hover:bg-white/10 transition">
              <IoIosSearch />
            </button>

            <button className="relative text-white text-xl hover:text-orange-500 p-2 rounded-full hover:bg-white/10 transition">
              <FaShoppingCart />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>

            <Link to="/login">
              <button className="hidden md:block border border-orange-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-orange-500 transition">
                Login
              </button>
            </Link>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setOpenMenu(true)}
              className="md:hidden text-white text-3xl"
            >
              <HiOutlineBars3 />
            </button>

          </div>
        </div>
      </nav>

      {/* DRAWER MENU */}
      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 280, background: "#000", height: "100%", color: "white" }}
          role="presentation"
        >

          <div className="flex justify-between items-center p-5 border-b border-white/10">
            <h2 className="text-orange-500 font-bold text-lg">Menu</h2>
            <button onClick={() => setOpenMenu(false)} className="text-2xl">
              <IoClose />
            </button>
          </div>


          <List>
            {NavbarMenu.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => setOpenMenu(false)}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <div className="p-6 mt-auto">
          <Link to="/login">
            <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl
            hover:bg-orange-600 active:scale-95 transition-all duration-300 shadow-lg">
              Login
            </button>
          </Link>
        </div>
      

        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;  