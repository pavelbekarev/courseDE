import { Fancybox } from "@fancyapps/ui";

/**
 * Функция для вызова модального окна
 * @return {string}
 */
export const ModalWindow = () => {
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  return `
    <a href="image-a.jpeg" data-fancybox="gallery" data-caption="Caption #1">
      <img src="thumbnail-a.jpeg" />
    </a>
    <a href="image-b.jpeg" data-fancybox="gallery" data-caption="Caption #2">
      <img src="thumbnail-b.jpeg" />
    </a>
  `;
};
