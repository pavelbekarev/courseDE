import { CustomSelect } from "#shared/ui/CustomSelect/index.js";
import {
  BarIcon,
  RestaurantIcon,
  TheaterIcon,
  CinemaIcon,
  MusicIcon,
} from "#shared/ui/Icons/index";
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

        <div>
          ${SaveChanges()}
        </div>
        <div >
          ${CustomSelect({
            extraAttrs: [{ name: "id", value: "select-type-mark" }],
            cfg: {
              searchEnabled: false,
              removeItemButton: true,
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
    </body>
  </html>
`;

export default IndexPage;
