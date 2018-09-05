import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
// selectors
import { getRecipeInProgress } from '../../redux/selectors/recipes';
// styles
import styles from './styles.css';

const Notification = ({ recipeName }) => (
  <div>
    {(recipeName && (
      <h2 className={styles.h2}>
        <span className={styles.span}>{recipeName}</span> is cooking...
        <Loader type="Hearts" color="#D32F2F" height={100} width={100} />
      </h2>
    )) || <h2>No one recipe is cooking now</h2>}
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
