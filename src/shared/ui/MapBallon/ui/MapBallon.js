import { DeleteButton } from "#shared/ui/DeleteButton/ui/DeleteButton.js";
import { EditButton } from "#shared/ui/EditButton/ui/EditButton.js";
import { iconsPresets, typeNamesRus } from "#shared/ui/Map/config/constants.js";
import { renderSwiper } from "#shared/ui/Swiper/ui/renderSwiper";

import { Title } from "#shared/ui/Title/ui/Title";
import "swiper/css/bundle";
/**
 *
 */
export const MapBallon = (info, type, extraClasses = [], extraAttrs = []) => {
  const typeNameRus = typeNamesRus[type];
  const typeIcon = iconsPresets[type];

  setTimeout(() => {
    renderSwiper("#swiperPlace", info.data.images, {
      direction: "horizontal",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, 0);

  return `
    <div id="swiperPlace"></div> 
    ${Title({ text: info.data.title, extraClasses: ["yandexMap__ballonContent__title"] })}

    <div class="yandexMap__ballonContent__typeContainer">
      ${typeIcon}
      <p class="yandexMap__ballonContent__typeContainer__type">${typeNameRus}</p>
    </div>
    <p class="yandexMap__ballonContent__address">${info.data.address.street}</p>
    <p class="yandexMap__ballonContent__comment">${info.data.comment}</p>
    <div class="yandexMap__ballonContent__interactiveControls">
      ${EditButton()}
      ${DeleteButton()}
    </div>
    `;
};
