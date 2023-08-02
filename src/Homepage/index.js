import React from 'react';
import './index.css'
import OverviewSection from '../OverviewSection';
import ItinerarySection from '../ItinerarySection';
import CostsAndSpecialOffers from '../CostsAndSpecailOffers';
import InclusionsAndExclusions from '../InclusionsAndExclusions';
import Testimonials from '../Tesimonials';
import ContactSection from '../Contactsection';
import Footer from '../Footer';

const HomePage = () => {
  return (
    <div className='header-container'>
      <div className="headline">
        <h1 className='main-heading'>Big Cats Week at Maasai Mara-Diwali 2023 Special</h1>
      </div>
      <div className='image-text-section'>
        <OverviewSection/>
        <a href="https://ibb.co/w05gkCS"><img src="https://i.ibb.co/X2cLQp7/t-UBanner-Image.png" className='image-tiger' alt="t-UBanner-Image" border="0" /></a>
      </div>

      <ItinerarySection/>
      <CostsAndSpecialOffers/>
      <ContactSection/>
      
    </div>
  );
};

export default HomePage;
