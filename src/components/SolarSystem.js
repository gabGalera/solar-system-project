import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import styles from './styles/SolarSystem.module.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div
        className={ styles.main__div }
        data-testid="solar-system"
      >
        <Title headline="Planetas" />
        <div
          className={ styles.container }
        >
          { Planets.map((planets) => (
            <PlanetCard
              key={ planets.name }
              planetName={ planets.name }
              planetImage={ planets.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
