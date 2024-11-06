import { Button } from "#shared/ui/Button/ui/Button";
import { NoIcon } from "#shared/ui/Icons/index";

export const DismissButton = () => {
  return `
    <div class="dismissButton">
      ${Button({ text: "Нет", icon: NoIcon(), extraClasses: ["dismissButton--color"] })}
    </div>
  `;
};
