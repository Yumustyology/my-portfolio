/\*
Create a functional component, which renders the name of the coworker, the in office status (in office or out of office) and a button.
The button should toggle the in office status of the coworker.
The data should come from the coworkers prop. The component should maintain its own state.

Note: You can do this task in React Native or React JS. both of them are acceptable answers.
\*/

import \* as React from 'react';

const coworkers = [
  {first\_name: 'Max', last\_name: 'Mustermann'},
  {first\_name: 'Vladimir', last\_name: 'Leles'},
  {first\_name: 'Tobias', last\_name: 'Anhalt'},
];

const CoworkerList = (props) => {
  // Todo
  // Add your code here
  // Should return your JSX
};

export default CoworkerList;


// ////////////////////////////////////////////////////


import React, { useState } from 'react';

const coworkers = [
  { first_name: 'Max', last_name: 'Mustermann' },
  { first_name: 'Vladimir', last_name: 'Leles' },
  { first_name: 'Tobias', last_name: 'Anhalt' },
];

const CoworkerList = (props) => {
  const [coworkersStatus, setCoworkersStatus] = useState(coworkers.map(coworker => ({...coworker, inOffice: true})));

  const toggleInOfficeStatus = (index) => {
    const updatedCoworkersStatus = [...coworkersStatus];
    updatedCoworkersStatus[index].inOffice = !updatedCoworkersStatus[index].inOffice;
    setCoworkersStatus(updatedCoworkersStatus);
  }

  return (
    <div>
      {coworkersStatus.map((coworker, index) => (
        <div key={index}>
          <p>
            {coworker.first_name} {coworker.last_name}
          </p>
          <p>
            {coworker.inOffice ? 'In office' : 'Out of office'}
          </p>
          <button onClick={() => toggleInOfficeStatus(index)}>
            Toggle In Office Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoworkerList;



// 2 /////////////////////////////////////////////////////


import React, { useState } from 'react';

const coworkers = [
  { first_name: 'Max', last_name: 'Mustermann' },
  { first_name: 'Vladimir', last_name: 'Leles' },
  { first_name: 'Tobias', last_name: 'Anhalt' },
];

const CoworkerList = (props) => {
  const [coworkersStatus, setCoworkersStatus] = useState(coworkers.map(coworker => ({...coworker, inOffice: true})));

  const toggleInOfficeStatus = (index) => {
    const updatedCoworkersStatus = [...coworkersStatus];
    updatedCoworkersStatus[index].inOffice = !updatedCoworkersStatus[index].inOffice;
    setCoworkersStatus(updatedCoworkersStatus);
  }

  return (
    <div>
      {coworkersStatus.map((coworker, index) => (
        <div key={index}>
          <p>
            {coworker.first_name} {coworker.last_name}
          </p>
          <p>
            {coworker.inOffice ? 'In office' : 'Out of office'}
          </p>
          <button onClick={() => toggleInOfficeStatus(index)}>
            Toggle In Office Status
          </button>
        </div>
      ))}
    </div>
  );
};

export default CoworkerList;

