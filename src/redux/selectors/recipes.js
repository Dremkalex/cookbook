const getIdFromProps = props => {
  const { match } = props;
  return match.params.recipeId;
};

const getRecipesFromState = state => {
  const { recipes } = state;
  return recipes.items;
};

const getRecipeInProgress = state => state.recipes.recipeInProgress;

export { getIdFromProps, getRecipesFromState, getRecipeInProgress };
