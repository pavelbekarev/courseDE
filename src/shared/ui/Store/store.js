import { persist, subscribeWithSelector } from "zustand/middleware";
import { createStore as create } from "zustand/vanilla";

/**
 * Функция для создания хранилища с уникальным именем
 * @param {string} storageName
 * @return {Function}
 */
export const createStore = (storageName) => {
  return create(
    subscribeWithSelector(
      persist(
        (set) => ({
          markers: [],
          activeFilters: [],
          setMarkers: (markers) => set({ markers }),

          addMarker: (marker) => {
            set((state) => {
              const exist = state.markers.some((m) => m?.id === marker.id);
              if (exist) {
                console.warn(`Marker with ID ${marker.id} already exists.`);
                return state; // Не изменяем состояние, если маркер с таким ID уже существует
              }
              return {
                markers: [...state.markers, marker], // Добавляем новый маркер
              };
            });
          },

          removeMarker: (markerId) => {
            set((state) => ({
              markers: state.markers.filter(
                (marker) => marker?.id !== markerId
              ),
            }));
          },

          setFilters: (filters) => {
            set({ activeFilters: filters });
          },

          addFilter: (filter) => {
            set((state) => {
              const exist = state.activeFilters.some(
                (f) => f?.id === filter.id
              );

              return exist
                ? state
                : { activeFilters: [...state.activeFilters, filter] };
            });
          },

          clearFilters: () => {
            set({ activeFilters: [] });
          },
        }),
        {
          name: storageName,
          getStorage: () => localStorage,
        }
      )
    )
  );
};
