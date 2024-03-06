import View from './View.js';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes founds!';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }

  //!
  // #generateMarkupSort() {
  //   return `
  //             <div class="sort-by-container">
  //               <!--<label for="sort">Sort</label>-->
  //               <select  class="sort-by" id="sort-by" name="sort-by">
  //                 <option value="">Sort By</option>
  //                 <option value="time-from-highest">Cooking time &uarr;</option>
  //                 <option value="time-from-lowest">Cooking time &darr;</option>
  //                 <option value="ingredients-least">Ingredients &uarr;</option>
  //               </select>
  //             </div>
  //          `;
  // }

  // _renderMarkupSort() {
  //   this.document
  //     .querySelector('.search-results')
  //     .insertAdjacentHTML('afterbegin', this.#generateMarkupSort());
  // }
}

export default new ResultsView();
