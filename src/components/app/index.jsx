import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Panel from '../shared-ui/panel';
// page
import Recipes from '../pages/recipes';
import ResipeDetails from '../pages/resipe-details';
// styles
import styles from './styles.css';

const App = () => (
  <div className={styles.wrapper}>
    <h1>Cook Book</h1>
    <Panel>
      <main className={styles.main}>
        <Switch>
          <Route exact path="/recipes/:recipeId" component={ResipeDetails} />
          <Route exact path="/recipes" component={Recipes} />
          <Redirect to="/recipes" />
        </Switch>
      </main>
    </Panel>
  </div>
);

export default App;
