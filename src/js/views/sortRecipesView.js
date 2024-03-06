import { mark } from 'regenerator-runtime';
import View from './View.js';

class SortRecipesView extends View {
  _parentElement = document.querySelector('.search-results');
  _errorMessage = 'No recipes founds!';
  _successMessage = '';

  _generateMarkupSort() {
    return `
              <div class="sort-by-container">
                <!--<label for="sort">Sort</label>-->
                <select  class="sort-by" id="sort-by" name="sort-by">
                  <option value="">Sort By</option>
                  <option value="time-from-highest">Cooking time &uarr;</option>
                  <option value="time-from-lowest">Cooking time &darr;</option>
                  <option value="ingredients-least">Ingredients &uarr;</option>
                </select>
              </div>
           `;
  }

  _renderMarkupSort() {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkupSort()
    );
  }

  _clear() {
    this._parentElement.querySelector('.sort-by-container')?.remove();
  }
}

export default new SortRecipesView();
