import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/MissionCard.module.css';

class MissionCard extends React.Component {
  render() {
    const missionsList = this.props;
    const { name, year, country, destination } = missionsList;

    return (
      <div
        className={ styles.container }
        data-testid="mission-card"
      >
        <p
          className={ styles.text }
          data-testid="mission-name"
        >
          { name }
        </p>
        <div className={ styles.infos }>
          <p
            className={ styles.text }
            data-testid="mission-year"
          >
            { year }
          </p>
          <p
            className={ styles.text }
            data-testid="mission-country"
          >
            { country }
          </p>
          <p
            className={ styles.text }
            data-testid="mission-destination"
          >
            { destination }
          </p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
