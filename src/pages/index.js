import { Button } from "#shared/ui/Button/index";
import { YesIcon, NoIcon } from "#shared/ui/Icons/index";

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
        ${Button({ text: "Да", icon: YesIcon(), extraClasses: ["button__icon--success"] })}
        ${Button({ text: "Нет", icon: NoIcon(), extraClasses: ["button__icon--dismiss"] })}
    </body>
  </html>
`;

export default IndexPage;
