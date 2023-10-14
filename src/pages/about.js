import React from "react";
import Footer from "../components/header & footer/footer/footer";
import Neededpeople from "../components/home/need/neededpeople";
import Abouts from "../components/home/abouts/about";
import Topbar from "../components/header & footer/header/topbar";

export default function About() {
  return (
    <>
      <Topbar/>
      <Neededpeople />
      <Abouts />
      <Footer/>
    </>
  );
}
