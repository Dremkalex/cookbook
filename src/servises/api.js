import recipes from './mock-data';

export const fetchAllRecipes = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([...recipes]);
    }, 200);
  });

export const fetchRecipeById = id =>
  new Promise(resolve => {
    setTimeout(() => {
      const recipe = recipes.find(rcp => rcp.id === id);
      resolve(recipe);
    }, 200);
  });
