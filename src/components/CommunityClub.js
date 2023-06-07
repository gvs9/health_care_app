import React, { useState } from 'react';
import Base from './Base';
import { Container } from 'reactstrap';
//community club component
function CommunityClub() {
  const [hasJoinedClub, setHasJoinedClub] = useState(false);
  const [hasAttendedEvents, setHasAttendedEvents] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === 'club') {
      setHasJoinedClub(checked);
    } else if (name === 'events') {
      setHasAttendedEvents(checked);
    }
  };

  return (
   <Base>
   
   <div className="community-club">
   <Container>
      <h2>Community Club</h2>
      <label htmlFor="club">
        <input
          type="checkbox"
          id="club"
          name="club"
          checked={hasJoinedClub}
          onChange={handleCheckboxChange}
        />
        Joined a Social Club
      </label>
      
      <br />
      <label htmlFor="events">
        <input
          type="checkbox"
          id="events"
          name="events"
          checked={hasAttendedEvents}
          onChange={handleCheckboxChange}
        />
        Attended Social Events
      </label>
      </Container>
    </div>
   
   </Base>
  );
}

export default CommunityClub;
