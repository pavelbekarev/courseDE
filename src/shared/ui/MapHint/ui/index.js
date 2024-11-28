import { LocationPlaceIcon } from "#shared/ui/Icons/index";

/**
 *
 */
export const MapHint = ({ extraClasses = [], extraAttrs = [] } = {}) => {
  return `
    ${LocationPlaceIcon({ iconColor: "#fff" })}
    <h3 class="mapHint__text">Адрес можно выбрать на карте</h3>
    <p class="mapHint__text">Перетаскивайте метку и ли кликайте по карте</p>
  `;
};
