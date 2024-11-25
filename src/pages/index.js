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
        ${Search({ selectorId: "searchAddress" })}
        <!-- Filters --!>
        <div id="map1" class="yandexMap"></div>
      </main>
    </body>
  </html>
`;

export default IndexPage;
