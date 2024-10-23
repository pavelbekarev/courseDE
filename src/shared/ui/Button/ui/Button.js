/**
 * Универсальная кнопка
 * Отображает иконку + текст
 * @return {string}
 */
export const Button = ({ text = "", icon = null, extraClasses = [] }) => {
  return `
          <button class="button">
            <label class="button__icon ${extraClasses.join(" ")}">${icon}</label>
            <span class="button__text">${text}</span>
          </button>
        `;
};
