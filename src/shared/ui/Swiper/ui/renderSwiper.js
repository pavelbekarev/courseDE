import { CustomSwiper } from "../model/index.js";
import "swiper/css/bundle";

/**
 * Рендер и инициализация Swiper
 * @param {string} containerSelector - Селектор контейнера, куда вставить слайдер
 * @param {Array} images - Массив изображений для слайдера
 * @param {Object} options - Опции для Swiper (direction, loop и др.)
 */
export const renderSwiper = (containerSelector, images, options) => {
  const container = document.querySelector(containerSelector);
  if (!(container instanceof HTMLElement)) {
    console.error(
      `Элемент с селектором "${containerSelector}" не найден или не является DOM-элементом.`
    );
    return;
  }

  const temp = {
    direction: options.direction,
    loop: options.loop,
    navigation: options.navigation,
    pagination: options.pagination,
  };

  setTimeout(() => {
    console.debug(typeof containerSelector);
  }, 2000);

  // Создаем экземпляр Swiper
  const swiperInstance = new CustomSwiper({
    containerSelector: containerSelector,
    sliderImages: images,
    ...options,
  });

  // Вставляем HTML в контейнер
  container.innerHTML = swiperInstance.renderCustomSwiper();

  // Инициализируем Swiper
  swiperInstance.initSwiper();
};
