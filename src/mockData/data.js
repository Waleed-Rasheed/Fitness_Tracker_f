import Image1 from "../assets/tabs/1.png";
import Image2 from "../assets/tabs/2.png";
import Image3 from "../assets/tabs/3.png";
import Image4 from "../assets/tabs/4.jpg";
import Image5 from "../assets/tabs/5.png";
import Image6 from "../assets/tabs/6.jpg";
import Image7 from "../assets/tabs/7.avif";
import Image8 from "../assets/tabs/8.jpg";
import Image10 from "../assets/tabs/10.avif";
import Image11 from "../assets/tabs/11.webp";
import Image12 from "../assets/tabs/12.webp";
import Image13 from "../assets/tabs/13.webp";
import Image14 from "../assets/tabs/14.avif";

import Aboutus from "../components/AboutUS/Aboutus";
import Product from "../components/Tab/TabComp";

export const NavbarMenu =[
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
  id: 2,
  title: "About Us",
  link: "#about",
},
  {
    id: 3,
    title: "Products",
    link: "#product",
  },
  {
    id: 4,
    title: "Banner",
    link: "#banner",
  },
 
];

export const ProductsData = [
  {
    id: 1,
    category: "Yoga",
    image: Image1,
    title: "Yoga Starter Kit",
    info: "Perfect set for beginners including mat and straps.",
    price: "$49",
  },
  // {
  //   id: 2,
  //   category: "Yoga",
  //   image: Image2,
  //   title: "Premium Yoga Mat",
  //   info: "Non-slip, eco-friendly yoga mat for daily practice.",
  //   price: "$100",
  // },
  {
    id: 3,
    category: "Yoga",
    image: Image3,
    title: "Yoga Mat Pro",
    info: "Extra thick mat for comfort and stability.",
    price: "$120",
  },
  {
    id: 4,
    category: "Yoga",
    image: Image4,
    title: "Yoga Blocks Set",
    info: "Supportive blocks to improve flexibility and balance.",
    price: "$35",
  },
  {
    id: 5,
    category: "Muscles",
    image: Image5,
    title: "Dumbbell Set",
    info: "Adjustable weights for full-body workouts.",
    price: "$150",
  },
  // {
  //   id: 6,
  //   category: "Muscles",
  //   image: Image6,
  //   title: "Resistance Bands",
  //   info: "Durable bands for strength training anywhere.",
  //   price: "$25",
  // },
  {
    id: 7,
    category: "Muscles",
    image: Image7,
    title: "Kettlebell",
    info: "Perfect for strength and conditioning workouts.",
    price: "$80",
  },
  {
    id: 8,
    category: "Muscles",
    image: Image8,
    title: "Pull-Up Bar",
    info: "Easy-to-install bar for upper body training.",
    price: "$60",
  },
  // {
  //   id: 9,
  //   category: "Muscles",
  //   image: Image9,
  //   title: "Workout Bench",
  //   info: "Adjustable bench for versatile exercises.",
  //   price: "$200",
  // },
   {
    id: 10,
    category: "Fitness",
    image: Image10,
    title: "Treadmill",
    info: "High-performance treadmill for home cardio workouts.",
    price: 500,
  },
  {
    id: 11,
    category: "Fitness",
    image: Image11,
    title: "Exercise Bike",
    info: "Smooth and quiet cycling for indoor fitness.",
    price: 350,
  },
  {
    id: 12,
    category: "Fitness",
    image: Image12,
    title: "Jump Rope",
    info: "Lightweight rope for cardio and endurance training.",
    price: 15,
  },
  // {
  //   id: 13,
  //   category: "Fitness",
  //   image: Image13,
  //   title: "Stepper Machine",
  //   info: "Compact stepper for lower body workouts.",
  //   price: 120,
  // },
  {
    id: 14,
    category: "Fitness",
    image: Image14,
    title: "Foam Roller",
    info: "Ideal for muscle recovery and pain relief.",
    price: 20,
  },
];


export const TestimonialsData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Steve Smith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
    delay: 0.5,
  },
  {
    id: 3,
    name: "Kristen",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Ariana",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
    delay: 1.1,
  },
];