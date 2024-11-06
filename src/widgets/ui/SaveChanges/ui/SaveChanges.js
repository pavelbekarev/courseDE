import { ConfirmButton } from "#shared/ui/ConfirmButton/index";
import { DismissButton } from "#shared/ui/DismissButton/index";
import { Title } from "#shared/ui/Title/index";

export const SaveChanges = () => {
  return `
    <div class="saveChanges">
      ${Title({ text: "Сохранить изменения?" })}
      <div class="saveChanges__buttons">
        ${ConfirmButton()}
        ${DismissButton()}
      </div>
    </div>  
  `;
};
