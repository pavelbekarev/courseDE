import { createStore } from "#shared/ui/store/store";

/**
 *
 */
export class StoreService {
  constructor(storageName) {
    this.store = createStore(storageName);
    this.actionMap = {
      addMarker: (payload) => this.store.getState().addMarker(payload),
      removeMarker: (payload) => this.store.getState().removeMarker(payload),
      addFilter: (payload) => this.store.getState().addFilter(payload),
      clearFilters: () => this.store.getState().clearFilters(),
      addMarkersList: (payload) => {
        payload.map((marker) => {
          this.store.getState().addMarker(marker);
        });
      },
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
