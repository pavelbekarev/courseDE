import { Swiper as defaultSwiper } from "swiper";
import "swiper/css/bundle";

/**
 *
 */
export const Swiper = () => {
  setTimeout(() => {
    const swiper = new defaultSwiper(".swiper", {
      // Параметры слайдера
      direction: "horizontal", // Направление (horizontal/vertical)
      loop: true, // Бесконечный слайдер
      navigation: {
        // Кнопки навигации
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, 0);

  const swiperLayout = `
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"></div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  `;

  return swiperLayout;
};
