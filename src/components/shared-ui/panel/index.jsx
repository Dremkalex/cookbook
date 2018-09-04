import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.css';

const Panel = ({ children }) => (
  <section className={styles.panel}>{children}</section>
);

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
