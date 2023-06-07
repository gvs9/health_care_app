import React from 'react';
import Base from './Base';

//list of health tips to maintain balance
function HealthFacts() {
  return (
   <Base>
    <div className="health-facts">
      <h2>Health Facts</h2>
      <ul>
      
        <li>Drink Water after an hour of consuming food</li>
        <li>Do Intermittent Fasting.</li>
        <li>Eat a balanced diet with plenty of fruits and vegetables.</li>
        <li>Stay hydrated by drinking enough water throughout the day.</li>
        <li>Avoid processed foods and opt for whole foods instead.</li>
        <li>Limit the consumption of sugary drinks and snacks.</li>
        <li>Include sources of lean protein in your meals.</li>
        <li>Choose whole grains over refined grains.</li>
        <li>Pay attention to portion sizes to maintain a healthy weight.</li>
      </ul>
    </div>
    </Base>
  );
}

export default HealthFacts;
