import React from 'react';
import './index.css';
import InclusionsAndExclusions from '../InclusionsAndExclusions';
import Testimonials from '../Tesimonials';

const CostsAndSpecialOffers = () => {
  const regularPackageCosts = [
    { category: 'Adult', cost: 'USD 1582' },
    { category: 'Child (4 to 9 years)', cost: 'USD 1400' },
  ];

  const independenceDayOffers = [
    { category: 'Adult', cost: 'USD 1322' },
    { category: 'Child', cost: 'USD 1127' },
  ];

  const specialOfferValidity = 'Hurry! Limited Time Offer! Book before August 14th, 2023, to avail of the special Independence Day offer and save on your dream Maasai Mara adventure.';

  const termsAndConditionsLink = 'www.travelunbounded.com/terms';

  return (
    <div className='cost-section'>
      <h2>Costs and Special Offers</h2>
      <div>
        <h3>Regular Package Costs</h3>
        <ul>
          {regularPackageCosts.map((cost) => (
            <li key={cost.category}>
              {cost.category}: {cost.cost}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Special Independence Day Offer</h3>
        <p>{specialOfferValidity}</p>
        <ul>
          {independenceDayOffers.map((offer) => (
            <li key={offer.category}>
              {offer.category}: {offer.cost}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>For more details, please refer to the <a href={termsAndConditionsLink}>Terms and Conditions</a> page.</p>
      </div>
      <InclusionsAndExclusions/>
      <Testimonials/>
    </div>
  );
};


export default CostsAndSpecialOffers