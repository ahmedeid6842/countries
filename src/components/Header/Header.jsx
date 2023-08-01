import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../styles/header.module.css';
import micIcon from '../../images/mic-svgrepo-com.svg';
import settingsIcon from '../../images/icons8-settings.svg';
import leftArrowIcon from '../../images/left-arrow-svgrepo-com.svg';

const Header = ({ title }) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      {title === 'Country Info' && (
        <div className={styles.goBack}>
          <Link to="/">
            <img src={leftArrowIcon} alt="Back" />
          </Link>
        </div>
      )}
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.icons}>
        <img src={micIcon} alt="Microphone" />
        <img src={settingsIcon} alt="Settings" />
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
