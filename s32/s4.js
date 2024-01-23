let product = {
    id: "P001",
    name: "Laptop",
    price: 1000,
    quantity: 5
};

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

