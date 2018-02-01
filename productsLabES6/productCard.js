class ProductCard {
  constructor (product) {
    this.product = product;
  }

  render() {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="product-card">
        <h3>${this.product.name}</h3>
        <div>Price    : $${this.product.price}</div>
        <div>Rating   : ${this.product.rating}</div>
        <div>In Stock : ${this.product.inStock}</div>
      </div>
    `
    return card;
  }
}
