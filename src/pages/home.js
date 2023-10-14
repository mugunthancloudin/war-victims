import React from "react";
import Footer from '../components/header & footer/footer/footer';
import Banner from '../components/home/BannerPage/banner';
import Victims from '../components/home/service/services';
import Neededpeople from '../components/home/need/neededpeople';
import Abouts from '../components/home/abouts/about';
import Card1 from '../components/home/card1/card1';
import Topbar from "../components/header & footer/header/topbar";




export default function Home() {
  return (
    <>
      <Topbar/>
  <Banner/>
  <Card1/>
  <Neededpeople/>
  <Abouts/>
  <Victims/>
  <Footer/>
    </>
  );
}
