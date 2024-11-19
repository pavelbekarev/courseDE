import { Button } from "#shared/ui/Button/ui/Button";
import { YesIcon, NoIcon } from "#shared/ui/Icons/index";
import { Title } from "#shared/ui/Title/index";

/**
 *
 */
export const SaveChanges = () => {
  return `
    <div class="saveChanges">
      ${Title({ text: "Сохранить изменения?" })}
      <div class="saveChanges__buttons">
        ${Button({ text: "Да", icon: YesIcon({ iconColor: "var(--colorSuccess)" }) })}
        ${Button({ text: "Нет", icon: NoIcon({ iconColor: "var(--colorDismiss)" }) })}
      </div>
    </div>  
  `;
};
