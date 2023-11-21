import { IProduct } from "./interfaces";

const productList: Array<IProduct> = [];

const addProduct = (product: IProduct) => {
  productList.push(product);
  return ({message: "Product sucessfully registered.", product});
}

const readProducts = (): void => console.log(productList);

const execute = () => {
  const fridge: IProduct = {
    id: 1,
    name: "Geladeira",
    price: 2400
  };
  const cooktop: IProduct = {
    id: 2,
    name: "Cooktop",
    price: 1200
  };
  console.log(addProduct(fridge));
  console.log(addProduct(cooktop));
  readProducts();
}

execute();