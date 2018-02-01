class ProductList {

  constructor(products) {
    this.products = products;
  }

  render() {
    const list = document.createElement('div');
    list.classNames = 'product-list';

    this.products.forEach((product) => {
      list.appendChild(
        new ProductCard(product).render()
      );
    })
    return list;
  }
}
