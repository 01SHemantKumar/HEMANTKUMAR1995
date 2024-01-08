import React from "react";
import Navbar from "../Components/ResuableComponent/Navbar";
import Footer from "../Components/ResuableComponent/Footer";
import Card from "../Components/ResuableComponent/Card";
import Carsousal from "../Components/ResuableComponent/Carsousal";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Carsousal />
      </div>
      <Card />
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
