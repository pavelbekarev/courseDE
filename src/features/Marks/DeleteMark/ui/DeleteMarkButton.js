import { Button } from "#shared/ui/Button";
import { DeleteIcon } from "#shared/ui/Icons";

/**
 * Кнопка удаления метки
 */
export const DeleteMarkButton = ({
  markId,
  iconColor = "var(--colorImperialRed)",
}) =>
  Button({
    text: "",
    icon: DeleteIcon({ iconColor }),
    extraAttrs: [{ name: "data-js-delete-mark-btn", value: markId }],
  });
