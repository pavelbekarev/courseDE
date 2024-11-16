import { createStore } from "#shared/ui/store/store";

/**
 *
 */
export class StoreService {
  constructor(storageName) {
    this.store = createStore(storageName);
    this.actionMap = {
      /* добавлеие маркера в Store */
      addMarker: (payload) => this.store.getState().addMarker(payload),

      /* удаление маркера из Store */
      removeMarker: (payload) => this.store.getState().removeMarker(payload),

      /* добавление фильтра в Store */
      addFilter: (payload) => this.store.getState().addFilter(payload),

      /* очистка фильтров */
      clearFilters: () => this.store.getState().clearFilters(),

      /* добавление списка маркеров в Store */
      addMarkersList: (payload) => {
        payload.map((marker) => {
          this.store.getState().addMarker(marker);
        });
      },

      /* удаление списка маркеров из Store */
      removeMarkersList: (payload) => {
        payload.map((marker) => {
          this.store.getState().removeMarker(marker.id);
        });
      },
    };
  }

  subscribeToMarkers(callback) {
    return this.store.subscribe((state) => state.markers, callback);
  }

  subscribeToFilters(callback) {
    return this.store.subscribe((state) => state.activeFilters, callback);
  }

  getMarkers() {
    return this.store.getState().markers;
  }

  getFilters() {
    return this.store.getState().activeFilters;
  }

  updateStore(action, payload) {
    const actionFunction = this.actionMap[action];

    actionFunction
      ? actionFunction(payload)
      : console.warn(`Action ${action} is not defined`);
  }
}
