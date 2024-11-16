export const listMarksMockResponse = {
  marks: [
    { id: "1", type: "Bar", cords: [53.5, 60.9] },
    { id: "2", type: "Restaurant", cords: [54.5, 57.9] },
    { id: "3", type: "Cinema", cords: [53.5, 57.9] },
    { id: "4", type: "Theater", cords: [52.5, 57.9] },
    { id: "5", type: "Music", cords: [51.5, 57.9] },
  ],
};

export const markDetail = {
  ["1"]: {
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  ["2"]: {
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  ["3"]: {
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  ["4"]: {
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
  ["5"]: {
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
      "/images/image1.png",
      "/images/image2.png",
      "/images/image3.png",
      "/images/image4.png",
    ],
  },
};
