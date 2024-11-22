import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import {
  iconsPresets,
  classNames as defaultClassNames,
  yandexMapCustomEventNames,
  iconShapeConfig as defaultIconShapeConfig,
} from "../config/constants.js";
import { checkMapInstance } from "../config/lib/checkMapInstance.js";
import { getExternalScript } from "#shared/lib/utils/index";
/**
 *
 */
export class YandexMap {
  constructor({
    containerSelector,
    apiKey,
    center = [45.751574, 37.573856],
    zoom = 10,
    lang = "ru_RU",
    apiUrl = "https://api-maps.yandex.ru/2.1/?apikey",
    classNames,
    iconShapeConfig,
  }) {
    this.containerSelector = containerSelector;
    this.containerMap = document.querySelector(this.containerSelector);
    this.apiKey = apiKey;
    this.center = center;
    this.zoom = zoom;
    this.lang = lang;
    this.apiUrl = apiUrl;
    this.instance = null;
    this.iconsPresets = iconsPresets;
    this.currentBalloon = null;
    this.classNames = classNames ?? defaultClassNames;
    this.iconShageConfig = iconShapeConfig ?? defaultIconShapeConfig;
  }

  getBallonLayout() {
    if (window.ymaps) {
      const ballonLayout = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.ballonLayout}">$[[options.contentLayout observeSize]]</div>`,
        {
          build: function () {
            this.constructor.superclass.build.call(this);
          },
          clear: function () {
            this.constructor.superclass.clear.call(this);
          },
        }
      );

      return ballonLayout;
    }

    throw new Error("ymaps not ready");
  }

  getBallonContent({ id, children }) {
    if (window.ymaps) {
      const linkCreateSwiperFn = this.createSwiperForBallon;
      const ballonContent = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.ballonContent}" data-js-ballon=${id}>
          ${children}
        </div>`,
        {
          build: function () {
            ballonContent.superclass.build.call(this);
            linkCreateSwiperFn(id);
          },
          clear: function () {
            this.constructor.superclass.clear.call(this);
          },
        }
      );

      return ballonContent;
    }

    throw new Error("ymaps not ready");
  }

  createSwiperForBallon(ballonId) {
    try {
      const ballonContainer = document.querySelector(
        `[data-js-ballon="${ballonId}"]`
      );

      console.debug(ballonContainer);

      const swiperEl = ballonContainer.querySelector(".swiper");
      const swiperPagination =
        ballonContainer.querySelector(".swiper-pagination");

      if (swiperEl && swiperPagination) {
        new Swiper(swiperEl, {
          slidesPerView: 1,
          direction: "horizontal",
          modules: [Pagination],
          pagination: {
            el: swiperPagination,
            clickable: true,
          },
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  getMarkerLayout(typeMarker) {
    if (window.ymaps) {
      const customLayout = window.ymaps.templateLayoutFactory.createClass(
        `<div class="${this.classNames.mark}">
           ${this.iconsPresets[typeMarker] ? this.iconsPresets[typeMarker] : typeMarker}
         </div>`
      );
      return customLayout;
    }

    throw new Error("ymaps not ready");
  }

  #createMap() {
    this.instance = new window.ymaps.Map(
      this.containerMap,
      {
        center: this.center,
        zoom: this.zoom,
        type: "yandex#map",
        controls: [],
      },
      {
        suppressMapOpenBlock: true,
      }
    );
    this.#bindEvents();
    return this.instance;
  }

  async initMap() {
    try {
      if (window.ymaps) {
        return this.#createMap();
      }

      await getExternalScript(
        `${this.apiUrl}=${this.apiKey}&lang=${this.lang}`
      );

      await new Promise((resolve, reject) => {
        window.ymaps.ready(() => {
          try {
            resolve(this.#createMap());
          } catch (e) {
            reject(e);
          }
        });
      });

      return this.instance;
    } catch (e) {
      console.error("Ошибка при загрузке API Яндекс.Карт: ", e);
    }
  }

  isExistMapInstance() {
    if (!this.instance) {
      console.warn("Карта не инициализирована");
      return false;
    }
    return true;
  }

  @checkMapInstance
  addMark({ id, cords, type: typeMarker, onClick } = {}) {
    const placemark = new window.ymaps.Placemark(
      cords,
      { id },
      {
        balloonLayout: this.getBallonLayout(),
        balloonContentLayout: this.getBallonContent({
          id,
          children: "Загрузка...",
        }),
        hasBalloon: true,
        iconLayout: this.getMarkerLayout(typeMarker),
        iconShape: this.iconShageConfig,
      }
    );
    placemark.events.add("click", (event) => {
      if (onClick && typeof onClick === "function") onClick(id, event);
    });

    placemark.events.add("balloonopen", () => {
      if (this.currentBalloon) {
        this.currentBalloon.balloon.close();
      }
      this.currentBalloon = placemark;
    });

    placemark.events.add("balloonclose", () => {
      this.currentBalloon = null;
    });

    this.instance.geoObjects.add(placemark);
  }

  handleMarkerClick(id, e, type) {
    const targerPlacemark = e.get("target");

    const customEvent = new CustomEvent(yandexMapCustomEventNames.markClicked, {
      detail: {
        id,
        type,
        mark: targerPlacemark,
      },
    });

    this.containerMap.dispatchEvent(customEvent);
  }

  updateCustomBallon(id, mark, info) {
    mark.options.set(
      "balloonContentLayout",
      this.getBallonContent({
        id,
        children: `${info}`,
      })
    );
  }

  handleCloseCurrentBallon() {
    if (this.currentBalloon) {
      this.currentBalloon.balloon.close();
    }
    this.currentBalloon = null;
  }

  @checkMapInstance
  addCenterMarker() {
    try {
      const centerMarker = document.createElement("div");
      centerMarker.className = this.classNames["centerMarker"];
      centerMarker.innerHTML = this.iconsPresets["centerMarker"];
      this.containerMap.appendChild(centerMarker);
      this.centerMarker = centerMarker;
      console.debug(this.centerMarker);
    } catch (e) {
      console.error("Ошибка при добавлении центральной метки:", e);
    }
  }

  @checkMapInstance
  centerMapByCords(cords, zoom = 15) {
    try {
      this.instance.setCenter(cords, zoom);
    } catch (e) {
      console.error(e);
    }
  }

  @checkMapInstance
  renderMarks(marks) {
    marks.forEach((mark) => {
      this.addMark({
        id: mark.id,
        cords: mark.cords,
        type: mark.type,
        onClick: (id, e) => {
          this.handleMarkerClick(id, e, mark.type);
        },
      });
      console.debug(mark.type);
    });
  }

  #bindEvents() {
    this.instance.events.add("click", () => {
      this.handleCloseCurrentBallon(); //TODO: а надо ли? надо подумать
    });
  }
}
