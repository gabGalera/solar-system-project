import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import styles from './App.module.css';

class App extends React.Component {
  render() {
    return (
      <div className={ styles.container }>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
