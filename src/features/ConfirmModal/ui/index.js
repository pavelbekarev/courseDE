import { getGeneratedAttrs } from "#shared/lib/utils";
import { Button } from "#shared/ui/Button";
import { NoIcon, YesIcon } from "#shared/ui/Icons/index";

/**
 * Компонент свитч - кнопки
 * @return {string}
 */
export const ConfirmModal = ({
  message = "",
  extraClasses = [],
  extraAttrs = [],
} = {}) => {
  return `
    <div class="confirmModal" ${extraClasses.join(" ")}" ${getGeneratedAttrs(extraAttrs)}>
      <p class="confirmModal__title">${message}</p>
      <div class="confirmModal__buttons">
        ${Button({ text: "Да", icon: YesIcon(), extraClasses: ["btn--isGreenLightIcon"], extraAttrs: [{ name: "data-js-confirm-btn", value: "" }] })}, 
        ${Button({ text: "Нет", icon: NoIcon(), extraClasses: ["btn--isRedIcon"], extraAttrs: [{ name: "data-js-cancel-btn", value: "" }] })}
      </div>
    </div>
  `;
};
