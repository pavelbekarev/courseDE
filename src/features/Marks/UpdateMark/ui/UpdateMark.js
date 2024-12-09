import { Button } from "#shared/ui/Button";
import { EditIcon } from "#shared/ui/Icons/index";

/**
 * Кнопка для открытия модалки для обновления метки
 * @return {String}
 */
export const UpdateMarkBtn = ({
  markInfo,
  text = "Редактировать",
  iconColor = "var(--colorBlack)",
}) => {
  return Button({
    text,
    icon: EditIcon({ iconColor: iconColor }),
    extraAttrs: [
      {
        name: "data-js-update-mark-info",
        value: markInfo,
      },
    ],
  });
};
