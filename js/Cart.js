
//Remove
const removeFunc = document.getElementsByClassName('remove');

for(let i=0; i < removeFunc.length; i++) {
    let btn = removeFunc[i];
    btn.addEventListener('click', (e) => {
        let btnClick = e.target
        btnClick.parentElement.parentElement.parentElement.remove();
        updateTotal();
    })
}

function updateTotal() {
    let cartItemContainer = document.getElementsByClassName('cart')[0];
    let productRows = cartItemContainer.getElementsByClassName('product');
    
    for(let i=0; i < productRows.length; i++) {
        let productRow = productRows[i];
        // let priceEle = productRow,getElementsByClassName('full-price')[0];

    }
}