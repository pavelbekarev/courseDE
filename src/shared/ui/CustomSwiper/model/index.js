import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";

/**
 * Класс кастомного слайдера
 */
export class CustomSwiper {
  constructor({
    containerSelector,
    slidersPerView = 1,
    direction = "horizontal",
    modules = [Navigation, Pagination],
    navigation = null,
    pagination = null,
  }) {
    const container = document.querySelector(containerSelector);

    this.container = container; // Сохраняем DOM-элемент
    this.sliderImages = slidersPerView;
    this.direction = direction;
    this.navigation = navigation;
    this.pagination = pagination;
    this.instance = null;
    this.modules = modules;
  }
}
