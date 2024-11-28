import { switchConfigDefault } from "../config/index.js";
import { getGeneratedAttrs } from "#shared/lib/utils/index";
import { Switch } from "#shared/ui/Switch/index";

/**
 * Компонент PlaceSwitchGroup с прокидываемым конфигом
 * @param {Object} param0 - параметры компонента
 * @param {Array} param0.extraClasses - дополнительные классы
 * @param {Array} param0.extraAttrs - дополнительные аттрибуты
 * @param {Array} param0.switchConfig - конфиг для генерации переключателей
 * @return {String} HTML-строка
 */
export const PlaceSwitchGroup = ({
  extraAttrs = [],
  extraClasses = [],
  switchConfig = switchConfigDefault,
} = {}) => {
  const switchElements = switchConfig
    .map(
      ({ label, name, checked, dataJsFilterItem, dataJsFilterParentName }) => {
        console.debug(checked);
        return `
        ${Switch({
          label: label,
          extraInputAttrs: [
            { name: "name", value: name },
            { name: "checked", value: checked.toString() },
            { name: "data-js-filter-item", value: dataJsFilterItem },
            {
              name: "data-js-filter-parent-name",
              value: dataJsFilterParentName,
            },
          ],
        })}
      `;
      }
    )
    .join("");

  return `
    <div class="placeSwitchGroup ${extraClasses.join(" ")}" ${getGeneratedAttrs(extraAttrs)}>
      <div data-js-filter="marks">
        <!--<input type="text" name="search" data-js-filter-item="search" data-js-filter-parent-name="marks" />-->
        ${switchElements}
      </div>
    </div>
  `;
};
