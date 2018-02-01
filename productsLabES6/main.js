const productService = new ProductService('https://kkane106.github.io/products.json');

const displayProducts = (showInStockOnly) => {
  productService
    .getProducts()
    .then((response) => {
      const productList = new ProductList(
        response.data.filter((product) => {
          if (showInStockOnly) {
            return product.inStock;
          }
          return product;
        })
      );
      const listDiv = document.getElementById('product-list')
      listDiv.innerHTML = '';
      listDiv.appendChild(productList.render());
    });
};

window.onload = () => {
  displayProducts(true);

  document.getElementById('instock')
  .addEventListener('change', (e) => {
    displayProducts(e.target.checked);
  });
};
