export default class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const calculateVat = (product, vat) => {
  return product.price * (vat / 100);
};
