export const filterCfg = {
  inputs: {
    search: {
      value: null,
      isChecked: "null",
      isDisabled: "null",
    },
    bars: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    restaurant: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    music: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    theatre: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
    cinema: {
      value: null,
      isChecked: false,
      isDisabled: false,
    },
  },
};

export const listMarksMockResponse = {
  marks: [
    { id: "1", type: "Bar", cords: [53.5, 60.9] },
    { id: "2", type: "Restaurant", cords: [54.5, 57.9] },
    { id: "3", type: "Cinema", cords: [53.5, 57.9] },
    { id: "4", type: "Theatre", cords: [52.5, 57.9] },
    { id: "5", type: "Music", cords: [51.5, 57.9] },
  ],
};

export const marksDetailMockResponse = [
  {
    id: "1",
    title: "Al Capone",
    type: "Bar",
    address: {
      city: "Челябинск 1",
      house: "11a",
      street: "ул. Братьев Кашириных 1",
    },
    comment:
      "Хороший бар и караоке, по средам у них специальные акции с коктейлями",
    images: [
      "/assets/marksDetail/image6.png",
      "/assets/marksDetail/image6.png",
      "/assets/marksDetail/image6.png",
      "/assets/marksDetail/image6.png",
    ],
  },
  {
    id: "2",
    title: "Al Capone Bistro",
    type: "Restaurant",
    address: {
      city: "Челябинск 2",
      house: "12a",
      street: "ул. Братьев Кашириных 2",
    },
    comment:
      "Идеальное место для романтического ужина. В меню представлены блюда международной кухни и авторские коктейли.",
    images: [
      "assets/marksDetail/image1.png",
      "assets/marksDetail/image2.png",
      "assets/marksDetail/image3.png",
      "assets/marksDetail/image4.png",
      "/assets/marksDetail/image5.png",
      "/assets/marksDetail/image6.png",
    ],
  },
  {
    id: "3",
    title: "Al Capone Cinema",
    type: "Cinema",
    address: {
      city: "Челябинск 3",
      house: "13a",
      street: "ул. Братьев Кашириных 3",
    },
    comment:
      "Современный кинотеатр с комфортными креслами и разнообразием фильмов. Каждый вторник - специальные цены на билеты!",
    images: [
      "/assets/marksDetail/image1.png",
      "/assets/marksDetail/image2.png",
      "/assets/marksDetail/image3.png",
      "/assets/marksDetail/image4.png",
      "/assets/marksDetail/image5.png",
      "/assets/marksDetail/image6.png",
    ],
  },
  {
    id: "4",
    title: "Театр «Капоне»",
    type: "Theater",
    address: {
      city: "Челябинск 4",
      house: "14a",
      street: "ул. Братьев Кашириных 4",
    },
    comment:
      "Неповторимые спектакли и вечера живой музыки. Откройте для себя искусство в уютной обстановке.",
    images: [
      "/assets/marksDetail/image1.png",
      "/assets/marksDetail/image2.png",
      "/assets/marksDetail/image3.png",
      "/assets/marksDetail/image4.png",
      "/assets/marksDetail/image5.png",
      "/assets/marksDetail/image6.png",
    ],
  },
  {
    id: "5",
    title: "Al Capone Night Club",
    type: "Music",
    address: {
      city: "Челябинск 5",
      house: "15a",
      street: "ул. Братьев Кашириных 5",
    },
    comment:
      "Ночной клуб с жаркими танцами и лучших DJ. Каждую субботу – грандиозные вечеринки с сюрпризами!",
    images: [
      "/assets/marksDetail/image1.png",
      "/assets/marksDetail/image2.png",
      "/assets/marksDetail/image3.png",
      "/assets/marksDetail/image4.png",
    ],
  },
];
