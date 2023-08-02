import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Homepage";
import Navabar from './Navabar'
import OverviewSection from "./OverviewSection";
import ItinerarySection from "./ItinerarySection";
import CostsAndSpecialOffers from "./CostsAndSpecailOffers";
import ContactSection from "./Contactsection";


const App = () => {
  return (
    <Router>
      <Navabar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<OverviewSection />} />
        <Route path="/days" element={<ItinerarySection/>} />
        <Route path="/prices" element={<CostsAndSpecialOffers/>} />
        <Route path="/contact" element={<ContactSection/>} />
      </Routes>
    </Router>
  );
};

export default App;
