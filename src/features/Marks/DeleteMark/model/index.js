import { deleteMark } from "../api/index.js";
import { ModalManager } from "#shared/lib/plugins/modalManager";
import { getAttr } from "#shared/lib/utils";

/**
 *
 */
export class DeleteMarkModel {
  static selectors = {
    ballon: "[data-js-ballon]",
    deleteMarkButton: "[data-js-delete-mark-btn]",
  };

  constructor(storeService) {
    this.storeService = storeService;
    this.#bindEvents();
  }

  handleDeleteMark = (event) => {
    const button = event.target.closest(
      DeleteMarkModel.selectors.deleteMarkButton
    );
    console.debug(button);

    if (!button) {
      return;
    }

    const markId = button.getAttribute(
      getAttr(DeleteMarkModel.selectors.deleteMarkButton)
    );

    if (!markId) {
      return;
    }
    console.debug(markId);

    const handleDelete = async () => {
      try {
        await deleteMark(markId); // Попытка удалить метку через API
        this.storeService.updateStore(
          "setMarkers",
          this.storeService.getMarkers().filter((item) => item.id !== markId)
        );
      } catch (error) {
        console.error("Ошибка при удалении метки:", error);
      }
    };

    ModalManager.getInstance().openConfirmModal({
      message: "Вы уверены, что хотите удалить метку?",
      onConfirm: async (markId) => {
        await handleDelete(markId);
        ModalManager.getInstance().closeAll();
      },
      onCancel: () => {
        ModalManager.getInstance().closeAll();
      },
    });
  };

  #bindEvents() {
    document.addEventListener("click", this.handleDeleteMark, true);
  }
}
