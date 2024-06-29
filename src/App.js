import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";
import Destination from "./components/destination/Destination"
import Search from './components/search/search'
import Selects from './components/selects/selects'
import Imgcarousel from './components/carousel/imgcarousel'
import Footer from './components/footer/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Selects />
      <Imgcarousel />
      <Footer />
    </div>
  );
}

export default App;
