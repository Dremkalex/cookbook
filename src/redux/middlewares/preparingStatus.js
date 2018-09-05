import { RECIPE_IN_PROGRESS } from '../actions/types';
import { finishMakingRecipe } from '../actions/recipe-status';

const throttled = {};

const throttle = store => next => action => {
  const { type } = action;

  if (type !== RECIPE_IN_PROGRESS) {
    return next(action);
  }

  if (throttled[type]) return next(action);

  throttled[type] = true;

  setTimeout(() => {
    throttled[type] = false;
    store.dispatch(finishMakingRecipe());
  }, 10000);

  return next(action);
};

export default throttle;
