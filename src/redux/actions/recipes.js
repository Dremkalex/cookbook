import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
} from './types';

import { fetchAllRecipes } from '../../servises/api';

const fetchRecipesRequest = () => ({
  type: FETCH_RECIPES_REQUEST,
});

const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes,
});

const fetchRecipesFailure = error => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error,
});

const fetchRecipes = () => dispatch => {
  dispatch(fetchRecipesRequest());

  fetchAllRecipes()
    .then(recipes => dispatch(fetchRecipesSuccess(recipes)))
    .catch(err => dispatch(fetchRecipesFailure(err)));
};

export default fetchRecipes;
