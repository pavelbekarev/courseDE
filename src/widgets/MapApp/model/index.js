import { API_ENDPOINTS } from "#shared/config/constants";
import { yandexMapCustomEventNames } from "#shared/ui/Map/config/constants";
import { YandexMap } from "#shared/ui/Map/model";

/**
 *
 */
export class MapApp {
  constructor(storeService, apiClient) {
    this.apiClient = apiClient;
    this.storeService = storeService;

    this.yandexMap = new YandexMap({
      containerSelector: "#map1",
      apiUrl: "https://api-maps.yandex.ru/2.1/?apikey",
      apiKey: "bac0a60d-665c-4bba-833c-e604ecaa227d",
      lang: "ru_RU",
      center: [53.5, 53.9],
      zoom: 10,
    });

    this.yandexMap
      .initMap()
      .then(async () => {
        this.yandexMap.renderMarks(this.storeService.getMarkers()); //Рендерим метки из стора
        const marks = await this.getMarks();
        console.debug(marks);
        this.storeService.updateStore("addMarkersList", marks);
      })
      .catch((e) => console.error(e));

    this.#bindYandexMapEvents();
    this.subscribeForStoreService();
  }

  async getMarks() {
    return this.apiClient
      .get(API_ENDPOINTS.marks.list)
      .then((res) => res?.data?.marks);
  }

  async handleMarkerClick(e) {
    const {
      detail: { id, type, mark },
    } = e;

    try {
      const res = await this.apiClient.get(API_ENDPOINTS.marks.detail, id);

      const layout = this.yandexMap.getLayoutContentForBallon(res, type);

      this.yandexMap.renderCustomBallon(id, type, mark, layout);
    } catch (e) {
      console.error(e);
    }
  }

  handleMarkersChanged() {
    console.debug("markers changed", this.storeService.getMarkers());
    this.yandexMap.renderMarks(this.storeService.getMarkers());
  }

  handleFiltersChanged() {
    console.debug("filters changed", this.storeService.getFilters());
  }

  subscribeForStoreService() {
    this.markerSubscription = this.storeService.subscribeToMarkers(() => {
      this.handleMarkersChanged();
    });
    this.fitlerSubscription = this.storeService.subscribeToFilters(() => {
      this.handleFiltersChanged();
    });
  }

  unsubscribeFromStoreService() {
    this.markerSubscription?.();
    this.subscribeOnStoreChange?.();
  }

  #bindYandexMapEvents() {
    document.addEventListener(yandexMapCustomEventNames.markClicked, (e) => {
      this.handleMarkerClick(e);
    });
  }
}
