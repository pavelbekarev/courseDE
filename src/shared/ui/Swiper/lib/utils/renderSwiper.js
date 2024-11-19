import "swiper/css/bundle";
import { CustomSwiper } from "#shared/ui/Swiper/model";

/**
 * Рендер и инициализация Swiper
 * @param {string} containerSelector - Селектор контейнера, куда вставить слайдер
 * @param {Array} images - Массив изображений для слайдера
 * @param {Object} options - Опции для Swiper (direction, loop и др.)
 */
export const renderSwiper = (containerSelector, images, options) => {
  const container = document.querySelector(containerSelector);

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
  container.innerHTML = swiperInstance.getLayoutForCustomSwiper();

  // Инициализируем Swiper
  swiperInstance.initSwiper();
};
