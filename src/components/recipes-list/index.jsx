import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
// components
import RecipeCard from '../recipe-card';
// actions
import fetchRecipes from '../../redux/actions/recipes';
// selectors
import { getRecipesFromState } from '../../redux/selectors/recipes';
// styles
import styles from './styles.css';

class RecipesList extends Component {
  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = () => {
    const { fetchRecipes: getRecipes } = this.props;
    getRecipes();
  };

  render() {
    const { recipes } = this.props;
    const { match } = this.props;

    return (
      <ul className={styles.ul}>
        {recipes.map(recipe => (
          <li className={styles.li} key={recipe.id}>
            <NavLink
              className={styles.link}
              to={{
                pathname: `${match.url}/${recipe.id}`,
              }}
            >
              <RecipeCard {...recipe} />
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(Object).isRequired,
  match: PropTypes.shape().isRequired,
  fetchRecipes: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mstp = state => ({
  recipes: getRecipesFromState(state),
  loading: state.recipes.loading,
});

const mdtp = { fetchRecipes };

export default compose(
  connect(
    mstp,
    mdtp,
  ),
  withRouter,
)(RecipesList);
