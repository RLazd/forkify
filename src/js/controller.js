import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; //for older browsers, for polyfiling eerything else
import 'regenerator-runtime/runtime'; //for polyfiling async/await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id); //does not return anything, just manipulates state

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
    //const recipeView = new recipeView(model.state.recipe) //if not rendering:
  } catch (err) {
    //('We couldnt find this recipe. Please try another!');
    recipeView.renderError();
  }
};
//controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
