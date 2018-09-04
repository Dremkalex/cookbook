import React from 'react';
// componets
import Panel from '../shared-ui/panel';
// styles
import styles from './styles.css';

const RecipeCard = recipe => (
  <Panel>
    <div className={styles.recipe}>
      <h3>{recipe.title}</h3>
      <img src={recipe.imageUrl} alt="Img" />
    </div>
  </Panel>
);

export default RecipeCard;
