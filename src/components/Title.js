import React from 'react';
import propTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;

    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: propTypes.string,
};

Title.defaultProps = {
  headline: propTypes.string,
};

export default Title;
