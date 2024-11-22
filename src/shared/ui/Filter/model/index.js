/**
 * Класс менеджера фильтров
 */
export class FilterManager {
  constructor({ containerSelector, onUpdate, filterCfg }) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;
    this.onUpdate = onUpdate;

    if (filterCfg) {
      this.applyFilters(filterCfg);
    }

    this.#bindFilterEvents();
  }

  #bindFilterEvents() {
    console.debug("события в рамках фильтра, change, input");
    this.#notifyChange("сюда передаем какие-то данные");
  }

  #notifyChange(changeData) {
    console.debug(
      "оповестить другие элементы о том, что произошли изменения в фильтре",
      changeData
    );

    if (typeof this.onUpdate === "function") {
      this.onUpdate(changeData);
    }

    const event = new CustomEvent("filter::changed", {
      detail: changeData,
    });

    this.container.dispatchEvent(event);
  }

  applyFilters(filterCfg) {
    console.debug(
      "Найти все элементы фильтра в рамках контейнера и проставить им значения из конфига"
    );
    this.#notifyChange("какие-то изменения");
  }
}
