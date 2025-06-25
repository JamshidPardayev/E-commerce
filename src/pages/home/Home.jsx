import React from "react";
import Hero from "../hero/Hero";
import Main from "../main/Main";
import Rooms from "../rooms/Rooms";
import Gallery from "../gallery/Gallery";
import Product from "../product/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <Main />
      <Product />
      <Rooms />
      <Gallery />
    </div>
  );
};

export default React.memo(Home);
