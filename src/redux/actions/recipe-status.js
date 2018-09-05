import { RECIPE_IN_PROGRESS, RECIPE_DONE } from './types';

const startMakingRecipe = title => ({
  type: RECIPE_IN_PROGRESS,
  payload: title,
});

const finishMakingRecipe = () => ({
  type: RECIPE_DONE,
});

export { startMakingRecipe, finishMakingRecipe };
