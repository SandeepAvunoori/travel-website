import React from 'react';


const InclusionsAndExclusions = () => {
  const inclusions = [
    'Internal transfers from JKIA airport to Maasai Mara and back by Landcruiser on shared basis',
    'Stay on twin sharing basis at Maasai Mara either at Zebra plains or Loyk camp or Julia river camp',
    'Game drives in Landcruisers in shared basis - minimum 4 paxs per vehicle',
    'Water during game drives',
    'All meals as mentioned in the itinerary',
    'Park Fees',
    'Guide Fees',
    'English speaking guides/drivers',
  ];

  const exclusions = [
    'Airfare or VISA charges',
    'Personal and medical expenses during the tour',
    'Tips and gratitude',
    'Anything other than mentioned in the Inclusions section',
  ];

  return (
    <div>
      <h2>Inclusions</h2>
      <ul>
        {inclusions.map((inclusion, index) => (
          <li key={index}>{inclusion}</li>
        ))}
      </ul>

      <h2>Exclusions</h2>
      <ul>
        {exclusions.map((exclusion, index) => (
          <li key={index}>{exclusion}</li>
        ))}
      </ul>
    </div>
  );
};

export default InclusionsAndExclusions;

