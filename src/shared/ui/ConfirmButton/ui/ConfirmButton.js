import { Button } from "#shared/ui/Button/ui/Button";
import { YesIcon } from "#shared/ui/Icons/index.js";

/**
 * Кнопка подтверждения
 * @return { JSXElement }
 */
export const ConfirmButton = () => {
  return `
    <div class="confirmButton">
      ${Button({ text: "Да", icon: YesIcon(), extraClasses: ["confirmButton--color"] })}
    </div>      
  `;
};
