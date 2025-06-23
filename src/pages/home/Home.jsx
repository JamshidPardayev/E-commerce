import React from "react";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import Products from "../products/Products";
import Rooms from "../rooms/Rooms";
import Gallery from "../gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <Main />
      <Products />
      <Rooms />
      <Gallery />
    </div>
  );
};

export default React.memo(Home);
