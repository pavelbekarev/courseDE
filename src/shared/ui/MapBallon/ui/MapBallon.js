import { getLayoutForCustomSwiper } from "../lib/index.js";
import { Button } from "#shared/ui/Button/index";
import { EditIcon, DeleteIcon } from "#shared/ui/Icons/index";
import { iconsPresets, typeNamesRus } from "#shared/ui/Map/config/constants.js";
import { Title } from "#shared/ui/Title/ui/Title";
import "swiper/css/bundle";
/**
 *
 */
export const MapBallon = ({
  ballonId,
  info,
  type,
  extraClasses = [],
  extraAttrs = [],
}) => {
  const typeNameRus = typeNamesRus[type];
  const typeIcon = iconsPresets[type];

  const customSwiperLayout = getLayoutForCustomSwiper({ info: info });

  return `
    ${customSwiperLayout}
    ${Title({ text: info.data.title, extraClasses: ["yandexMap__ballonContent__title"] })}

    <div class="yandexMap__ballonContent__typeContainer">
      ${typeIcon}
      <p class="yandexMap__ballonContent__typeContainer__type">${typeNameRus}</p>
    </div>
    <p class="yandexMap__ballonContent__address">${info.data.address.street}</p>
    <p class="yandexMap__ballonContent__comment">${info.data.comment}</p>
    <div class="yandexMap__ballonContent__interactiveControls">
      ${Button({ text: "Редактировать", icon: EditIcon() })}
      ${Button({ icon: DeleteIcon({ iconColor: "var(--colorDelete)" }) })}
    </div>
    `;
};
