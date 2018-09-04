import { combineReducers } from 'redux';
import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  RECIPE_IN_PROGRESS,
  RECIPE_DONE,
} from '../actions/types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_RECIPES_SUCCESS:
      return payload;

    default:
      return state;
  }
};

const loading = (state = false, { type }) => {
  switch (type) {
    case FETCH_RECIPES_REQUEST:
      return true;

    case FETCH_RECIPES_SUCCESS:
    case FETCH_RECIPES_FAILURE:
      return false;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_RECIPES_REQUEST:
      return null;

    case FETCH_RECIPES_FAILURE:
      return payload;

    default:
      return state;
  }
};

const recipeInProgress = (state = null, { type, payload }) => {
  switch (type) {
    case RECIPE_IN_PROGRESS:
      return payload;

    case RECIPE_DONE:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  loading,
  error,
  recipeInProgress,
});
