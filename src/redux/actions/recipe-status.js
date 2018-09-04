import { RECIPE_IN_PROGRESS, RECIPE_DONE } from './types';

const startMakingRecipe = id => ({
  type: RECIPE_IN_PROGRESS,
  payload: id,
});

const finishMakingRecipe = () => {
  console.log('finish action!');
  return {
    type: RECIPE_DONE,
  };
};

export { startMakingRecipe, finishMakingRecipe };
