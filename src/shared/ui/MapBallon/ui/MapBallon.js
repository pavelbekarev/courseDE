import { getLayoutForCustomSwiper } from "../lib/index.js";
import { DeleteMarkButton } from "#features/Marks/DeleteMark/index.js";
import { UpdateMarkBtn } from "#features/Marks/UpdateMark/ui/UpdateMark.js";
import { Button } from "#shared/ui/Button/index";
import { EditIcon } from "#shared/ui/Icons/index";
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
    ${UpdateMarkBtn({ markInfo: info })}
    ${DeleteMarkButton({ markId: ballonId })}
    </div>
  `;
};
