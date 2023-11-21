"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productList = [];
const addProduct = (product) => {
    productList.push(product);
    return ({ message: "Product sucessfully registered.", product });
};
const readProducts = () => console.log(productList);
const execute = () => {
    const fridge = {
        id: 1,
        name: "Geladeira",
        price: 2400
    };
    const cooktop = {
        id: 2,
        name: "Cooktop",
        price: 1200
    };
    console.log(addProduct(fridge));
    console.log(addProduct(cooktop));
    readProducts();
};
execute();
