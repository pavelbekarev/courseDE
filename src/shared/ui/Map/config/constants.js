import {
  BarIcon,
  MusicIcon,
  RestaurantIcon,
  TheaterIcon,
  CinemaIcon,
  CenterMarkerIcon,
} from "#shared/ui/Icons/index";

export const classNames = {
  ballonContent: "yandexMap__ballonContent",
  ballonLayout: "yandexMap__ballonLayout",
  mark: "yandexMap__mark",
  centerMarker: "yandexMap__centerMarker",
};

export const iconShapeConfig = {
  type: "Circle",
  coordinates: [0, 0],
  radius: 40,
};

export const iconsPresets = {
  Bar: BarIcon({ iconColor: "var(--colorRed)" }),
  Music: MusicIcon({ iconColor: "var(--colorPictonBlue)" }),
  Restaurant: RestaurantIcon({ iconColor: "var(--colorOrange)" }),
  Theater: TheaterIcon({ iconColor: "var(--colorVeronica)" }),
  Cinema: CinemaIcon({ iconColor: "var(--colorMantis)" }),
  centerMarker: CenterMarkerIcon({ iconColor: "var(--colorGray  )" }),
};

export const typeNamesRus = {
  ["Bar"]: "Бар",
  ["Music"]: "Ночной клуб",
  ["Restaurant"]: "Ресторан",
  ["Theater"]: "Театр",
  ["Cinema"]: "Кинотеатр",
};

export const yandexMapCustomEventNames = {
  markClicked: "yandexMap::markClicked",
};
