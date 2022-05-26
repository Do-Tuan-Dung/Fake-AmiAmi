//List product
const productList = [
    {
        img: '../img/product/GOODS-Aya.jpg',
        title: '[Pre-Order]Fumofumo Aya Shameimaru',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Black Reisen',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Chen',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Cirno',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Eiki Shiki',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Eirin Yagokoro',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Flandre Scarlet',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Joon Yorigami',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Kaguya Houraisan',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Kasen Ibaraki',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Keiki Haniyasushin',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Koishi Komeiji',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Hata no Kokoro',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Marisa Kirisame',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Hong Meiling',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Toyosatomimi no Miko',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Fujiwara no Mokou',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Momiji Inubashiri ',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Nitori Kawashiro',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Reimu Hakurei',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Remilia Scarlet A',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Remilia Scarlet B',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Renko Usami',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Rumia',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Sakuya Izayoi',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Sanae Kochiya',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Satori Komeiji',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Shion Yorigami',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Tan Cirno',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Tenshi Hinanawi',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Tewi Inaba',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo White Reisen',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Youmu Konpaku',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Yukari Yakumo',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Fumofumo Yuyuko Saigyouji',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Satori Komeiji',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Koishi Komeiji',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Sakuya Izayoi',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Remilia Scarlet',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Flandre Scarlet',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Cirno',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Marisa Kirisame',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Reimu Hakurei',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '',
        title: '[Pre-Order]Dekafumo Tan Cirno',
        description: '70cm',
        price: '50800¥',
    },
];


const content = document.querySelector(".main-body");

let contentHtml = '';

productList.forEach(function (prod) {
    contentHtml += `<div class="product">
    <img
      class="product-image"
      src="${prod.img}"
      alt=""
    />
    <span class="product-title">${prod.title}</span>
    <span class="product-size">${prod.description}</span>
    <span class="product-price">${prod.price}</span>
  </div>
  `
});

content.innerHTML = contentHtml;