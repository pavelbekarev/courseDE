import { Button } from "#shared/ui/Button";
import { CustomSelect } from "#shared/ui/CustomSelect/index";
import {
  CinemaIcon,
  RestaurantIcon,
  MusicIcon,
  TheaterIcon,
  BarIcon,
  SaveIcon,
} from "#shared/ui/Icons/index";
import { Title } from "#shared/ui/Title/ui/Title";

/**
 * Контент модалки обновления метки
 */
export const getUpdateMarkModalContent = ({
  markInfo,
  url,
  method = "post",
  iconColor = "var(--colorBlack)",
}) => {
  return `
    <div class="updateModalContent" >
      <form class="updateModalContent__form" data-js-form=${JSON.stringify({ url, method, showModalAfterSuccess: "#modalSuccess" })}>
        ${Title({ text: "Редактировать метку", extraClasses: ["updateModalContent__form__titlePadding"] })}
        <p class="updateModalContent__form__address">${markInfo.data.address.street}, ${markInfo.data.address.city}</p>
        <div class="updateModalContent__form__markTypeLayout">
          <p class="updateModalContent__form__markTypeLayout__text">Тип метки</p>
          ${CustomSelect({
            extraAttrs: [
              {
                name: "data-js-update-mark-info-select-type",
                value: markInfo.id,
              },
              {
                name: "name",
                value: "typeMark",
              },
            ],
            cfg: {
              preset: "default",
              itemSelectText: "",
              searchEnabled: false,
              choices: [
                {
                  value: "Бar",
                  label: "Бар",
                  selected: markInfo.data.type === "Bar",
                  customProperties: {
                    icon: BarIcon({ iconColor: "var(--colorRed)" }),
                  },
                },
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: markInfo.data.type === "Restaurant",
                  customProperties: {
                    icon: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: markInfo.data.type === "Music",
                  customProperties: {
                    icon: MusicIcon({ iconColor: "var(--colorPictonBlue)" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: markInfo.data.type === "Theatre",
                  customProperties: {
                    icon: TheaterIcon({ iconColor: "var(--colorVeronica)" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: markInfo.data.type === "Cinema",
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "var(--colorMantis)" }),
                  },
                },
              ],
            },
          })}
        </div>
        <div class="updateModalContent__form__commentLayout">
          <label class="updateModalContent__form__commentLayout__comment">
            Комментарий пользователя
          </label>
          <input class="updateModalContent__form__commentLayout__input" 
            type="comment" 
            value="${markInfo.data.comment}" 
            name="comment" 
          /> 
        </div>
        <div class="updateModalContent__form__controls">
          ${Button({
            text: "Отмена",
            textColor: "updateModalContent__cancelBtn",
            extraAttrs: [
              {
                name: "type",
                value: "submit",
              },
            ],
          })}
          ${Button({
            text: "Сохранить",
            icon: SaveIcon(),
            extraAttrs: [
              {
                name: "type",
                value: "submit",
              },
            ],
          })}
          
        </div>
        
      </form>
    </div>`;
};
