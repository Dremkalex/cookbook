import React from 'react';
// componets
import Panel from '../shared-ui/panel';
// styles
import styles from './styles.css';

const RecipeCard = recipe => (
  <Panel>
    <div className={styles.recipe}>
      <h2>{recipe.title}</h2>
      <img src={recipe.imageUrl} alt="Img" />
    </div>
  </Panel>
);

export default RecipeCard;
