let categories = [
    { categoryId: 1, categoryName: "Fruits" },
    { categoryId: 2, categoryName: "Beverages" },
    { categoryId: 3, categoryName: "Random" }
];

let inventory = [
    { productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
    { productId: 2, productName: "Orange Juice", category: 2, price: 3.49, stock: 40 }
];

//Add + errorUnique +  errorProperties + errorNocategory
function addProduct(id, pName, cate, price, pStock) {
    let product = { productId: id, productName: pName, category: cate, price: price, stock: pStock };

    if (!product.productId || !product.productName || !product.category || !product.price || !product.stock) {
        return console.log("Error: Product must have all properties.");
    }

    let categoryExists = categories.find(c => c.categoryId === product.category);
    if (!categoryExists) {
        return console.log("Error: Category ID does not exist.");
    }

    let existingProduct = inventory.find(p => p.productId === product.productId);
    if (existingProduct) return console.log("Error: Product ID must be unique.");

    inventory.push(product);
    console.log("Product added successfully.");
}

//findProduct
function findProduct(productId) {
    let findProduct = inventory.find(p => p.productId === productId);
    if (!findProduct) return "Error: Product not found.";
    return findProduct;
}

//update Stocks
function updateStock(productId, newStock) {
    if (newStock < 0) return console.log("Error: Stock cannot be negative.");


    let product = findProduct(productId);
    if (!product) return "Error: Cannot update stock. Product not found.";

    product.stock = newStock;
    console.log("Stock updated successfully.");
}

//delete product
function deleteProduct(productId) {
    let product = inventory.find(p => p.productId === productId);
    if (!product) {
        console.log("Error: Product not found.");
        return;
    }

    let productIndex = inventory.indexOf(product);
    inventory.splice(productIndex, 1);
    console.log("Product deleted successfully.");
}

// Testtest
addProduct(3, "rock", 3, 2, 22);
console.log(findProduct(3));
updateStock(3, 120);
deleteProduct();
console.log(findProduct(3));
console.log(inventory);
