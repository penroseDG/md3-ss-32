let information = {
    id: "123",
    name: "PenroseDG",
    phone: "0931511560",
    address: "69 Main Street hole "
};
delete information.address;
information.email = "john.doe@example.com";
console.log("Thông tin sau khi chỉnh sửa:");
console.log("ID: " + information.id);
console.log("Tên: " + information.name);
console.log("Số điện thoại: " + information.phone);
console.log("Email: " + information.email);

