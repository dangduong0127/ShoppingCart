const ShopItemsData = [
  {
    id: "1",
    name: "MATRIX 1999 DECK",
    price: 780000,
    image: "img/matrix-1999-1.jpg",
  },

  {
    id: "2",
    name: "RAEDA DECK",
    price: 1470000,
    image: "img/Raeda-Deck.jpg",
  },

  {
    id: "3",
    name: "MUSTY DECK",
    price: 2470000,
    image: "img/Musty-Deck.jpg",
  },

  {
    id: "4",
    name: "TRISTIQUE DECK",
    price: 2470000,
    image: "img/Tristique-deck.jpg",
  },

  {
    id: "5",
    name: "FIELD TRIP DECK",
    price: 1470000,
    image: "img/Fied-Trip-deck.jpg",
  },

  {
    id: "6",
    name: "TARO RAINBOW LOGO DECK",
    price: 880000,
    image: "img/web-5.jpg",
  },

  {
    id: "7",
    name: "NEON RAINBOW LOGO DECK",
    price: 980000,
    image: "img/web-1.jpg",
  },

  {
    id: "8",
    name: "ORANAGE RAINBOW LOGO DECK",
    price: 3670000,
    image: "img/web-2.jpg",
  },

  {
    id: "9",
    name: "BLUE RAINBOW LOGO DECK",
    price: 1670000,
    image: "img/web-3.jpg",
  },

  {
    id: "10",
    name: "WHITE RAINBOW LOGO DECK",
    price: 780000,
    image: "img/web-4.jpg",
  },

  {
    id: "11",
    name: "CUTIS MODEL DECK",
    price: 580000,
    image: "img/cutis.jpg",
  },

  {
    id: "12",
    name: "CAM VU MODEL DECK",
    price: 4670000,
    image: "img/cam-vu.jpg",
  },

  {
    id: "13",
    name: "SON NGUYEN MODEL DECK",
    price: 5670000,
    image: "img/son-nguyen.jpg",
  },
];

function convertVND(money) {
  var x = money;
  x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  return x;
}
