import Swiper from "swiper";
import "swiper/css/bundle";

/**
 * Класс кастомного слайдера
 */
export class CustomSwiper {
  constructor({
    containerSelector,
    sliderImages = [],
    direction = "horizontal",
    loop = false,
    navigation,
    pagination,
  }) {
    const container = document.querySelector(containerSelector);

    this.container = container; // Сохраняем DOM-элемент
    this.sliderImages = sliderImages;
    this.direction = direction;
    this.loop = loop;
    this.navigation = navigation;
    this.pagination = pagination;
    this.instance = null;
  }

  /**
   * Инициализация Swiper
   */
  initSwiper() {
    if (!this.container) {
      console.error("Контейнер для Swiper не найден.");
      return;
    }

    this.instance = new Swiper(this.container.querySelector(".swiper"), {
      direction: this.direction,
      loop: this.loop,
      navigation: this.navigation,
      pagination: this.pagination,
    });
  }

  /**
   * Генерация HTML для слайдера
   * @return {string} HTML-шаблон
   */
  getLayoutForCustomSwiper() {
    return `
      <div class="swiper">
        <div class="swiper-wrapper">
          ${this.sliderImages.map(
            (image) => `
              <div class="swiper-slide">
                <img src="${image}" alt="Swiper image" />
              </div>`
          )}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    `;
  }
}
