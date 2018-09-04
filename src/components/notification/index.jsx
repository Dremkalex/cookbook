import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// selectors
import { getRecipeInProgress } from '../../redux/selectors/recipes';
// styles
import styles from './styles.css';

const Notification = ({ recipeName }) => (
  <div>
    {(recipeName && (
      <h2>
        Recipe <span className={styles.span}>{recipeName}</span> preparing...
      </h2>
    )) || <h2>No recepie is being prepared</h2>}
  </div>
);

Notification.propTypes = {
  recipeName: PropTypes.string,
};

Notification.defaultProps = {
  recipeName: null,
};

const mstp = state => ({
  recipeName: getRecipeInProgress(state),
});

export default connect(
  mstp,
  null,
)(Notification);
