import React from 'react';
import Base from './Base';

//weekly schedule of exercises 
const exerciseSchedule = [
  { day: 'Monday', exercise: 'Cardio' },
  { day: 'Tuesday', exercise: 'Light Weight Training' },
  { day: 'Wednesday', exercise: 'Yoga' },
  { day: 'Thursday', exercise: 'Rest' },
  { day: 'Friday', exercise: 'Cardio' },
  { day: 'Saturday', exercise: ' Yoga' },
  { day: 'Sunday', exercise: 'Rest' },
];

function ExerciseSchedule() {
  return (
    <Base>
    <div className="exercise-schedule">
      <h2>Exercise Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Exercise</th>
          </tr>
        </thead>
        <tbody>
        
          {exerciseSchedule.map((program, index) => (
            <tr key={index}>
              <td>  {program.day}</td>
              <td>{program.exercise}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    
    </Base>
  );
}

export default ExerciseSchedule;
