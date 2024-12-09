import { getGeneratedAttrs } from "#shared/lib/utils/index";

/**
 * Универсальная кнопка
 * Отображает кнопку с иконкой + текстом
 * @return {string}
 */
export const Button = ({
  text = "",
  textColor = "",
  icon = null,
  extraClasses = [],
  extraAttrs = [],
}) => {
  return `
    <button class="button ${text ? "button--isText" : ""}" ${getGeneratedAttrs(extraAttrs)} >
      <label class="button__icon" ${extraClasses.join(" ")}>
        ${icon}
      </label>
      <span class="button__text ${textColor ? textColor : ""}">
        ${text}
      </span>
    </button>
  `;
};
