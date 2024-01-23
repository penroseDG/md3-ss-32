let books = [
    { author: " Ducvipdeptrai0aiso1", name: "Bookofdeptrai" },
    { author: "ducvip16122004", name: "Bookofhoiamgi" },
    { author: "ducfaker", name: "Bookofvippro" },
];
let timKiemTacGia = prompt("Nhập tên tác giả cần tìm:");
let timThay = false;
for (let i = 0; i < books.length; i++) {
    if (books[i].author.toLowerCase() === timKiemTacGia.toLowerCase()) {
        console.log("Đối tượng Book tìm thấy:");
        console.log(books[i]);
        timThay = true;
        break;
    }
}
if (!timThay) {
    console.log("Không tìm thấy sách.");
}
