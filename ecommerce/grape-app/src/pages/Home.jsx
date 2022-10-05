import React from "react";

import WineHouse from "../components/WineHouse/";
import TopWinesCarousel from "../components/MainCarousel/test";
import HarmonyCarousel from "../components/Harmony/";
import Media from "../components/Media";

function Home() {
  return (
    <>
      <main>
        <WineHouse />

        <TopWinesCarousel />

        <HarmonyCarousel />

        <Media />
      </main>
    </>
  );
}

export default Home;