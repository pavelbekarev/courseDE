import { SearchDefaultIcon, SearchHoverIcon } from "#shared/ui/Icons/index";

/**
 * Поисковая строка
 * @return {string}
 */
export const Search = ({
  selectorId = "",
  extraAttrs = [],
  extraClasses = [],
} = {}) => {
  return `
          <div class="search">
            <input 
              placeholder="Введите адрес" 
              type="text" 
              class="search__input" 
              id="${selectorId ? selectorId : ""}" 
            />
            <span class="search__icon" id="searchIcon">
              ${SearchHoverIcon()}
            </span>
          </div>
        `;
};
