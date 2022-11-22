import React from "react";
import Hearder from "../components/Header/Hearder";
import Slider from "../components/Slider/Slider";
import Transactions from "../components/Transactions/Transactions";

function Home() {
  return (
    <div>
      <Hearder />
      <Slider />
      <Transactions />
    </div>
  );
}

export default Home;
