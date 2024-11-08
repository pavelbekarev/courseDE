import { StoreService } from "#shared/lib/services/StoreService";

/**
 *
 */
export class MapApp {
  constructor(storageName) {
    this.storeService = new StoreService(storageName);
    this.subscribeForStoreService();

    setTimeout(() => {
      /* очистка фильтров */
      this.storeService.updateStore("clearFilters");

      /* добавление списка меток в Store */
      this.storeService.updateStore("addMarkersList", [
        { id: 15, value: "text" },
        { id: 16, value: "text" },
      ]);

      /* удаление списка меток из Store  */
      this.storeService.updateStore("removeMarkersList", [
        { id: 15, value: "text" },
        { id: 16, value: "text" },
      ]);

      /* удаление метки из Store */
      this.storeService.updateStore("removeMarker", 16);
    }, 3000);
  }

  handleMarkersChanged() {
    console.debug("markers changed", this.storeService.getMarkers());
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
}
