class ProductService {
  constructor(url) {
    this.url = url;
  }

  getProducts() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', this.url);
      xhr.onreadystatechange = () => {
        if (xhr.status < 400 && xhr.readyState === 4) {
          const response = {};
          response.data = JSON.parse(xhr.responseText);
          response.status = xhr.status;
          resolve(response);
        }
        if (xhr.status >= 400 && xhr.readyState === 4) {
          const response = {};
          response.status = xhr.status;
          reject(response);
        }
      }
      xhr.send(null);
    })
  }
}
