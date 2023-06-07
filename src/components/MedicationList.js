import React, { useState, useEffect } from 'react';

import Base from './Base';
function MedicationList() {
  const [medications, setMedications] = useState([]);
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  
  useEffect(() => {
    // Request permission for notifications
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          setIsNotificationEnabled(true);
        }
      })
      .catch((error) => {
        console.error('Error requesting permission for notifications:', error);
      });
  }, []);

  const handleAddMedication = () => {
    // Add a new medication to the list
    const newMedication = prompt('Enter medication name:');
    if (newMedication) {
      setMedications([...medications, newMedication]);
    }
  };

  



  const handleTakeMedication = (medication) => {
    // Remove the medication from the list
    setMedications(medications.filter((item) => item !== medication));

    // Send a notification for medication reminder
    if (isNotificationEnabled) {
      const notification = new Notification('Medication Reminder', {
        body: `Time to take ${medication}!`,
        icon: 'path/to/notification-icon.png',
      });
  
      // Automatically close the notification after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);
    }
  };

  return (
    <Base>
    <div className="medication-list">
      <h2>Medication List</h2>
      
      <button  onClick={handleAddMedication}>Add Medicine</button>
      
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>
            {medication}
            <button onClick={() => handleTakeMedication(medication)}>
              Take Medicine
            </button>
          </li>
        ))}
      </ul>
    </div>
    </Base>
  );
}

export default MedicationList;

