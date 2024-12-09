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
      </header>
      <main class="container">
        <div class="controlPanel">
          ${Search({ selectorId: "searchAddress" })}
          ${PlaceSwitchGroup()}
        </div>
        <div id="map1" class="yandexMap"></div>
      </main>

      <form>
      </form>

      <div class="modalContainer">
        <div class="modalSuccess" id="modalSuccess">
            <p>Успешно!</p>
        </div>
        <div class="modalError" id="modalError">
          <p>Не успешно!</p>
        </div>
      </div>
    </body>
  </html>
`;

export default IndexPage;
