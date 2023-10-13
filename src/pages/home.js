import React from "react";
import Footer from "../components/header & footer/footer/footer";
import Nav_bar from "../components/header & footer/navbar/navbar";
import Achivements from "../components/home/Achivements/achivements";
import Service from "../components/home/service/services";
// import Abouts from "../components/home/abouts/about";
import Banner from "../components/home/BannerPage/banner";



export default function Home() {
  return (
    <>
    
      <Nav_bar />
      <Banner/>
      {/* <Abouts/> */}
      <Achivements />
      <Service />
      <Footer />
    </>
  );
}
