// const precioOriginal = 120;
// const descuento = 15;

function calcularPrecioConDescuento (precio, descuento) {
    const porcenatajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcenatajePrecioConDescuento) / 100);

    return precioConDescuento;
}

function onClickButtonPriceDiscound() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}
// console.log( {
//     precioOriginal,
//     descuento,
//     porcenatajePrecioConDescuento,
//     precioConDescuento,
// }
// );