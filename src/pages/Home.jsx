import React from 'react'
import BgImage from "../assets/bg.avif"
import NavBar from '../components/Navbar/NavBar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Equipments from '../components/Equipments/Equipments'
import Banner from '../components/Banner/Banner'
import TabComp from '../components/Tab/TabComp'
import Banner2 from '../components/Banner/Banner2'
import Img1 from "../assets/2.png"
import Img2 from "../assets/3.png"
import AboutUs from '../components/AboutUS/Aboutus'
// import Testimonials from '../components/Testimonials/Testimonials'




const Bannerdata = {
  image: Img1,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "",
}

const Banner2data = {
  image: Img2,
  title: "The Importants To Take Care Of Yourself",
  subtitle: "The Importants To Take Care Of Yourself Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nam obcaecati sequi odio dolore officia magni reiciendis, architecto, eos, aut asperiores reprehenderit quas rerum omnis facilis quam eius doloribus maxime! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae vero inventore assumenda ducimus alias doloribus.",
  link: "",
}


const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
}

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      
      <div style={bgStyle}>
        <NavBar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...Bannerdata}/>
       
    <AboutUs image="https://images4.alphacoders.com/692/thumb-1920-692043.jpg" />
  

      
      
      
      <TabComp />
      <Banner {...Banner2data}/>
      {/* <Testimonials /> */}
      <Banner2/>
      

      <Footer />

    </div>
  )
}

export default Home