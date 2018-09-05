import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// component
import Button from '../../shared-ui/button';
// servises
import { fetchRecipeById } from '../../../servises/api';
// selectors
import { getIdFromProps } from '../../../redux/selectors/recipes';
// action
import { startMakingRecipe } from '../../../redux/actions/recipe-status';

class ResipeDetails extends Component {
  static propTypes = {
    history: PropTypes.shape().isRequired,
    startMakingRecipe: PropTypes.func.isRequired,
  };

  state = {
    title: null,
    imageUrl: null,
    author: null,
    body: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    fetchRecipeById(id).then(recipe => this.setState({ ...recipe }));
  }

  handleGoBack = () => {
    const { title } = this.state;
    const { startMakingRecipe: startCook } = this.props;
    startCook(title);

    const { history } = this.props;
    return history.push({
      pathname: '/recipes',
    });
  };

  render() {
    const { title, imageUrl, author, body } = this.state;

    return (
      <article>
        <h2>{title}</h2>
        <img src={imageUrl} alt="" />
        <p>
          <b>Author: {author}</b>
        </p>
        <p>{body}</p>
        <Button onClick={this.handleGoBack}>Prepare</Button>
      </article>
    );
  }
}

const mstp = (state, props) => {
  const id = getIdFromProps(props);

  return {
    recipe: state.recipes.items.find(recipe => recipe.id === id),
  };
};

const mdtp = { startMakingRecipe };

export default connect(
  mstp,
  mdtp,
)(ResipeDetails);
