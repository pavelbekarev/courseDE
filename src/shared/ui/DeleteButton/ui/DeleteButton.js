import { Button } from "#shared/ui/Button/index";
import { DeleteIcon } from "#shared/ui/Icons/index";

/**
 * Кнопка "Удалить" (иконка без текста)
 */
export const DeleteButton = () => {
  return `
    <div class="deleteButton">
      ${Button({ icon: DeleteIcon(), extraClasses: ["deleteButton--color"] })}
    </div>      
  `;
};
