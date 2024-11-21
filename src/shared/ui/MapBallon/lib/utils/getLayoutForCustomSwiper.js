import "swiper/css/bundle";

/**
 * Рендер и инициализация Swiper
 * @param {string} containerSelector - Селектор контейнера, куда вставить слайдер
 * @param {Array} images - Массив изображений для слайдера
 * @param {Object} options - Опции для Swiper (direction, loop и др.)
 */
/**
 * Генерация HTML для слайдера
 * @return {string} HTML-шаблон
 */
export const getLayoutForCustomSwiper = ({ info }) => {
  console.debug("info!!! ", info);
  const sliders = info.data.images
    .map((image) => {
      return `<div class="swiper-slide">
              <img src="${image}" alt="Swiper image" />
            </div>`;
    })
    .join();

  return `
    <div class="swiper">
      <div class="swiper-wrapper">
        ${sliders}
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `;
};
