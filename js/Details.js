let params = new URL(document.location).searchParams;
let id = params.get('id');

let detailPage = document.querySelector("detail__container")
let delContent = '';

productList.forEach(function (del) {
    delContent += `<div class="product">
    <div class="product__image__container">
        <div class="product__image" style="background-image: url(${del.img});">
        </div>
    </div>
    <div class="product-body">
    <a href="../html/Details.html?id=1"><span class="product__title">${prod.title}</span></a>
    <span class="product__size">${del.description}</span>
    <span class="product__price">Price: ${del.price}</span>
    </div>
  </div>
  `
});

detailPage.innerHTML = delContent;

fore 