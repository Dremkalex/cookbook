import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './styles.css';

const Button = ({ onClick, children }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
