import React from 'react';
import styles from './styles/Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <header
        className={ styles.header }
      >
        <h1>
          Sistema Solar
        </h1>
      </header>
    );
  }
}

export default Header;
