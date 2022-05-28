//List product
const productList = [
    {
        img: '../img/product/GOODS-Aya.jpg',
        title: '[Pre-Order] Fumofumo Shameimaru Aya',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-blackReisen.jpg',
        title: '[Pre-Order] Fumofumo (Black) Reisen Udongein Inaba',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Chen.jpg',
        title: '[Pre-Order] Fumofumo Chen',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Cirno.jpg',
        title: '[Pre-Order] Fumofumo Cirno',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Eiki.jpg',
        title: '[Pre-Order] Fumofumo Shiki Eiki Yamaxanadu',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Eirin.jpg',
        title: '[Pre-Order] Fumofumo Yagokoro Eirin',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Flandre.jpg',
        title: '[Pre-Order] Fumofumo Flandre Scarlet',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Hatate.jpg',
        title: '[Pre-Order] Fumofumo Himekaidou Hatate',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Iku.jpg',
        title: '[Pre-Order] Fumofumo Nagae Iku',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Joon.jpg',
        title: '[Pre-Order] Fumofumo Yorigami Joon',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Kaguya.jpg',
        title: '[Pre-Order] Fumofumo Houraisan Kaguya',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Kasen.jpg',
        title: '[Pre-Order] Fumofumo Ibaraki Kasen',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Keiki.jpg',
        title: '[Pre-Order] Fumofumo Haniyasushin Keiki',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Koishi.jpg',
        title: '[Pre-Order] Fumofumo Komeiji Koishi',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Kokoro.jpg',
        title: '[Pre-Order] Fumofumo Hata no Kokoro',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Marisa.jpg',
        title: '[Pre-Order] Fumofumo Kirisame Marisa (A)',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Marisa2.jpg',
        title: '[Pre-Order] Fumofumo Kirisame Marisa (B)',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Meiling.jpg',
        title: '[Pre-Order] Fumofumo Hong Meiling',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Miko.jpg',
        title: '[Pre-Order] Fumofumo Toyosatomimi no Miko',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Mokou.jpg',
        title: '[Pre-Order] Fumofumo Fujiwara no Mokou',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Momiji.jpg',
        title: '[Pre-Order] Fumofumo Inubashiri Momiji',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Nitori.jpg',
        title: '[Pre-Order] Fumofumo Kawashiro Nitori',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Raymoo.jpg',
        title: '[Pre-Order] Fumofumo Hakurei Reimu',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Remilia.jpg',
        title: '[Pre-Order] Fumofumo Remilia Scarlet (A)',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Remilia2.jpg',
        title: '[Pre-Order] Fumofumo Remilia Scarlet (B)',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Renko.jpg',
        title: '[Pre-Order] Fumofumo Usami Renko',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Rumia.jpg',
        title: '[Pre-Order] Fumofumo Rumia',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Sakuya.jpg',
        title: '[Pre-Order] Fumofumo Izayoi Sakuya',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Sanae.jpg',
        title: '[Pre-Order] Fumofumo Kochiya Sanae',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Satori.jpg',
        title: '[Pre-Order] Fumofumo Komeiji Satori',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Shion.jpg',
        title: '[Pre-Order] Fumofumo Yorigami Shion',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-tanCirno.jpg',
        title: '[Pre-Order] Fumofumo Tan Cirno',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Tenshi.jpg',
        title: '[Pre-Order] Fumofumo Hinanawi Tenshi',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Tewi.jpg',
        title: '[Pre-Order] Fumofumo Tewi Inaba',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Utsuho.jpg',
        title: '[Pre-Order] Fumofumo Reiuji Utsuho',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-whiteReisen.jpg',
        title: '[Pre-Order] Fumofumo (White) Reisen Udongein Inaba',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Youmu.jpg',
        title: '[Pre-Order] Fumofumo Konpaku Youmu',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Yukari.jpg',
        title: '[Pre-Order] Fumofumo Yakumo Yukari',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-Yuyuko.jpg',
        title: '[Pre-Order] Fumofumo Saigyouji Yuyuko',
        description: '20cm',
        price: '6500¥',
    },
    {
        img: '../img/product/GOODS-dekaSatori.jpg',
        title: '[Pre-Order] Dekafumo Komeiji Satori',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaKoishi.jpg',
        title: '[Pre-Order] Dekafumo Komeiji Koishi',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaSakuya.jpg',
        title: '[Pre-Order] Dekafumo Izayoi Sakuya',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaRemilia.jpg',
        title: '[Pre-Order] Dekafumo Remilia Scarlet',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaFlandre.jpg',
        title: '[Pre-Order] Dekafumo Flandre Scarlet',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaCirno.jpg',
        title: '[Pre-Order] Dekafumo Cirno',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaMarisa.jpg',
        title: '[Pre-Order] Dekafumo Kirisame Marisa',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekaReimu.jpg',
        title: '[Pre-Order] Dekafumo Hakurei Reimu',
        description: '70cm',
        price: '50800¥',
    },
    {
        img: '../img/product/GOODS-dekatanCirno.jpg',
        title: '[Pre-Order] Dekafumo Tan Cirno',
        description: '70cm',
        price: '50800¥',
    },
];


const content = document.querySelector(".main-body");

let contentHtml = '';

productList.forEach(function (prod) {
    contentHtml += `<div class="product">
    <div class="product__image__container">
        <div class="product__image" style="background-image: url(${prod.img});">
        </div>
    </div>
    <span class="product__title">${prod.title}</span>
    <span class="product__size">Size: ${prod.description}</span>
    <span class="product__price">Price: ${prod.price}</span>
  </div>
  `
});

content.innerHTML = contentHtml;