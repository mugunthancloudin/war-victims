import React from "react";
import Footer from "../components/header & footer/footer/footer";
import Banner from "../components/home/BannerPage/banner";
import Victims from "../components/home/service/services";
import Card1 from "../components/home/card1/card1";
import Topbar from "../components/header & footer/header/topbar";

export default function Service() {
  return (
    <>
      <Topbar/>
      <Card1 />
      <Victims />
      <Footer />
    </>
  );
}
