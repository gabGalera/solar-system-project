import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { Planets.map((planets) => (
          <PlanetCard
            key={ planets.name }
            planetName={ planets.name }
            planetImage={ planets.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
