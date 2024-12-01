import { ModalWindow } from "../shared/ui/ModalWindow/ui/index.js";
import { PlaceSwitchGroup } from "#features/PlaceSwitchGroup/index";
import { Search } from "#shared/ui/Search/ui/Search.js";

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
        ${ModalWindow()}
        ${Search({ selectorId: "searchAddress" })}
        ${PlaceSwitchGroup()}
        <div id="map1" class="yandexMap"></div>
      </main>

      <div id="modalSuccess">
          <p>Успешно!</p>
      </div>
      <div id="modalError">
          <p>Не успешно!</p>
      </div>
    </body>
  </html>
`;

export default IndexPage;
