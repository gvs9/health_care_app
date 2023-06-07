import React, { useState } from 'react';
import Base from './Base';
import { Container } from 'reactstrap';

//its a notification component to set reminder for water and medicine 
function Notifications() {
  const [NotificationTime, setNotificationTime] = useState('');
  const [isReminderSet, setIsReminderSet] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNotificationTime(value);
  };

 

  const handleSetReminder = () => {
    setIsReminderSet(true);
  };

  return (
    <Base>
    {/*medicine Notification*/}
    <div className="medicine-notification">
    <Container>
      <h2>Medicine Notification</h2>
      <form>
        <label htmlFor="NotificationTime">Set Time :</label>
        <input
          type="time"
          id="NotificationTime"
          name="NotificationTime"
          value={NotificationTime}
          onChange={handleInputChange}
        />
        <button type="button" className='ms-2' onClick={ handleSetReminder}>
          Set Reminder
        </button>
      </form>

      {isReminderSet && (
        <div className="notification-message">
          <p>Take Medicine at {NotificationTime}</p>
        </div>
      )}
</Container>
</div>


    <br></br>

    {/*Water Notification*/}
<div className="Water-notification">
  <Container>
      <h2>Water Notification</h2>
      <form>
        <label htmlFor="NotificationTime">Set Time :</label>
        <input
          type="time"
          id="NotificationTime"
          name="NotificationTime"
          value={NotificationTime}
          onChange={handleInputChange}
        />
        <button type="button" className='ms-2' onClick={ handleSetReminder}>
          Set Reminder
        </button>
      </form>

      {isReminderSet && (
        <div className="notification-message">
          <p>Quench Water at {NotificationTime}</p>
        </div>
      )}
</Container>
</div>
    </Base>
  );

  }



export default Notifications;