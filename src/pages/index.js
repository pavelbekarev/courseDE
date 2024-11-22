import { CustomSelect } from "#shared/ui/CustomSelect/index.js";
import {
  BarIcon,
  RestaurantIcon,
  TheaterIcon,
  CinemaIcon,
  MusicIcon,
} from "#shared/ui/Icons/index";
import { Switch } from "#shared/ui/Switch/index.js";
import { SaveChanges } from "#widgets/SaveChanges/index";

/**
 * Страница приложения
 * @return {string}
 */
const IndexPage = () => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Home Page</title>
    </head>
    <body>
      <header>
        <h1>Welcome to the Home Page</h1>
      </header>
      <main>
        <p>Hello world! 12</p>

        <div class="isFlex mb16 gap8">
          ${Switch({
            label: "Привет мир",
            extraClasses: ["switch--isRightLabel"],
            extraInputAttrs: [
              { name: "name", value: "rememberMe" },
              { name: "form", value: "formAuth" },
              { name: "checked", value: "true" },
            ],
          })}
        </div>

        <div>
          ${SaveChanges()}
        </div>
        <div style="max-width: 279px">
          ${CustomSelect({
            extraAttrs: [{ name: "id", value: "select-type-mark" }],
            cfg: {
              preset: "default",
              searchEnabled: false,
              itemSelectText: "",
              choices: [
                {
                  value: "Ресторан",
                  label: "Ресторан",
                  selected: true,
                  customProperties: {
                    icon: RestaurantIcon({ iconColor: "#FFB012" }),
                  },
                },
                {
                  value: "Бар",
                  label: "Бар",
                  selected: true,
                  customProperties: {
                    icon: BarIcon({ iconColor: "#f93639" }),
                  },
                },
                {
                  value: "Театр",
                  label: "Театр",
                  selected: true,
                  customProperties: {
                    icon: TheaterIcon({ iconColor: "#9747FF" }),
                  },
                },
                {
                  value: "Ночной клуб",
                  label: "Ночной клуб",
                  selected: true,
                  customProperties: {
                    icon: MusicIcon({ iconColor: "#33B8FF" }),
                  },
                },
                {
                  value: "Кино",
                  label: "Кино",
                  selected: true,
                  customProperties: {
                    icon: CinemaIcon({ iconColor: "#67BF55" }),
                  },
                },
              ],
            },
          })}
        </div>
        <div id="map1" class="yandexMap" style="width: 800px; aspect-ratio: 1 / 1"></div>
        <input type="text" id="searchAddress"/>
    </body>
  </html>
`;

export default IndexPage;
