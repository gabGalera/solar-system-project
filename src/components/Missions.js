import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missionsList = missions;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missionsList.map((e) => (
          <MissionCard
            key={ e.name }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />
        )) }
      </div>
    );
  }
}

export default Missions;
