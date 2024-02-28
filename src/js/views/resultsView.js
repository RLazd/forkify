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

  _generateMarkupSortBtn() {
    const markup = `
          <button class="btn--inline pagination__btn--next">
            <span>${'hello'}</span>
            <!--<svg class="search__icon">
              <use href="${''}#icon-arrow-right"></use>
            </svg> -->
          </button>
      `;

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ResultsView();
