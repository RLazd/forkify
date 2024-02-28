import View from './View.js';

class SortRecipesView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes founds!';
  _successMessage = '';

  _generateMarkupSortBtn() {
    return `
          <button data-goto="${i}"  class="btn--inline pagination__btn--next">
            <span>${i}</span>
            <svg class="search__icon">
              <use href="${i}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
  }
}

export default new SortRecipesView();
