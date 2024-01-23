let products = [
    { id: 1, product_name: " LOL ", price: 30},
    { id: 2, product_name: " Valorant", price: 20 },
    { id: 3, product_name: " TFT ", price: 40 },
    
];
function sapXepTangDanTheoGia(products) {
    return products.sort(function (a, b) {
        return a.price - b.price;
    });
}
let productsSapXep = sapXepTangDanTheoGia(products);
console.log("Danh sách products sau khi sắp xếp:");
console.log(productsSapXep);
