import "choices.js/public/assets/styles/choices.css";
import "./styles.js";
import { ApiClient } from "../shared/lib/services/ApiClient.js";
import { MapApp } from "../widgets/ui/MapApp/model/index.js";
import { API_URL } from "#shared/config/constants";
import { StoreService } from "#shared/lib/services/StoreService.js";
import { ChoiceSelectModel } from "#shared/ui/CustomSelect/model/index.js";

async function initMSW() {
  if (process.env.NODE_ENV === "development") {
    const { getMocks } = await import("#shared/api/browser");
    await getMocks();

    console.debug("msw ready");
  } else {
    return Promise.resolve();
  }
}

function domReady() {
  return new Promise((res) => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", res);
    } else {
      res();
    }
  });
}

Promise.all([initMSW(), domReady()]).then(() => {
  window.App = {};
  new ChoiceSelectModel();
  window.App.ChoiceSelectModel = ChoiceSelectModel;
  new MapApp(new StoreService("mapAppStore"), new ApiClient(API_URL));
});
