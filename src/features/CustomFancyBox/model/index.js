import { Fancybox as NativeFancyBox } from "@fancyapps/ui";

/**
 * Класс кастомного Fancybox
 */
export class CustomFancyBox {
  constructor({ container, delegate = "[data-js-fancybox]", options = {} }) {
    this.container = document.querySelector(container);
    this.delegate = delegate;
    this.options = options;

    this.init();
    console.debug("ctor");
  }

  init() {
    NativeFancyBox.bind(this.container, this.delegate, this.options);
    console.debug("init сработал");
  }

  destroy() {
    NativeFancyBox.unbind(this.container);
    NativeFancyBox.close(); // Закрываем открытые модальные окна, если они есть
  }
}
