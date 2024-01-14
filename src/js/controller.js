import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

import 'core-js/stable'; //for older browsers, for polyfiling eerything else
import 'regenerator-runtime/runtime'; //for polyfiling async/await

// if (module.hot) {
//   module.hot.accept();
// }

// Recipe view
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading recipe
    await model.loadRecipe(id); //does not return anything, just manipulates state

    // 2) Rendering recipe
    recipeView.render(mode.getSearchResults(1));
    //const recipeView = new recipeView(model.state.recipe) //if not rendering:
  } catch (err) {
    recipeView.renderError();
  }
};

// Search view
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    //console.log(model.state.search.result); = state remains due to module.hot (PArcel thisng)
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination btns
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

// Pagination view
const controlPagination = function (goToPage) {
  // 3) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 4) Render NEW pagination btns
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
