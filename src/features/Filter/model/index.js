import { getDebouncedFn } from "#shared/lib/utils/index";

/**
 * Класс FilterManager
 */
export class FilterManager {
  constructor({
    filterName,
    onUpdate,
    filterCfg,
    debounceDelayForInput = 1000,
  }) {
    this.attrs = {
      filterContainer: "data-js-filter",
      filterItem: "data-js-filter-item",
      filterParentName: "data-js-filter-parent-name",
    };
    this.filterName = filterName;
    this.onUpdate = onUpdate;
    this.container = document.querySelector(
      `[${this.attrs.filterContainer}="${filterName}"]`
    );

    if (!this.container) return;

    if (filterCfg) {
      this.applyFilters(filterCfg);
    }

    this.debouncedHandleEvent = getDebouncedFn(
      this.handleEvent,
      debounceDelayForInput
    ).bind(this);

    this.#bindFilterEvents();
  }

  #notifyChange(changeData) {
    if (typeof this.onUpdate === "function") {
      this.onUpdate(changeData);
    }

    const event = new CustomEvent("filter::changed", {
      detail: changeData,
    });

    this.container.dispatchEvent(event);
  }

  #bindFilterEvents() {
    document.addEventListener("input", this.debouncedHandleEvent, true);
    document.addEventListener("change", (e) => this.handleEvent(e), true);
  }

  // Обработчик изменения состояния фильтра
  handleEvent(event) {
    const target = event.target;

    // Получаем имя фильтра
    const filterName = target.getAttribute(this.attrs.filterItem);

    const filterParentName = target.getAttribute(this.attrs.filterParentName);

    if (filterParentName !== this.filterName || !filterName) {
      return;
    }

    const changeData = {
      value:
        target.type === "checkbox" || target.type === "radio"
          ? null
          : target.value, // Для чекбоксов и радио кнопок значение null
      isChecked:
        target.type === "checkbox" || target.type === "radio"
          ? target.checked // Для чекбоксов и радио кнопок состояние checked
          : false,
      isDisabled: target.disabled || false, // Если элемент отключен
    };

    console.debug("Обработано изменение фильтра:", changeData);

    // Оповещаем о произошедших изменениях
    this.#notifyChange({ [filterName]: changeData });
  }

  applyFilters(filtersCfg) {
    //TODO: опять подвязка на inputs. Нужно подумать над этим
    const { inputs } = filtersCfg;
    Object.entries(inputs).forEach(([name, data]) => {
      const filterItem = document.querySelector(
        `[${this.attrs.filterItem}="${name}"][${this.attrs.filterParentName}="${this.filterName}"]`
      );

      if (!filterItem) {
        console.warn(`Элемент фильтра с именем "${name}" не найден.`);
        return;
      }

      // Устанавливаем значения в зависимости от типа элемента. В будущем лучше переделать на switch-case
      if (filterItem.type === "checkbox" || filterItem.type === "radio") {
        filterItem.checked = Boolean(data.isChecked);
      } else if (filterItem.type === "text" || filterItem.tagName === "INPUT") {
        filterItem.value = data.value || "";
      } else {
        console.warn(
          `Тип элемента фильтра "${filterItem.tagName}" не поддерживается.`
        );
      }
    });
  }
}
