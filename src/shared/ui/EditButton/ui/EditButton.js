import { Button } from "#shared/ui/Button/index";
import { EditIcon } from "#shared/ui/Icons/index";

/**
 * Кнопка "редактировать"
 */
export const EditButton = () => {
  return `
    <div class="editButton">
      ${Button({ text: "Редактировать", icon: EditIcon() })}
    </div>      
  `;
};
