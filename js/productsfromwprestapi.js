const baseUrl = "https://monicanikolaisen-gamehub.netlify.app/wp-json/wc/store/products";

const productsContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const results = await response.json();

    createHTML(results);
  } catch (error) {
    console.log("something is apparently not working, duh");
  }
}
getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productsContainer.innerHTML += `<div class="productfromrestapi"><h2>${product.name}</h2><img src="${product.images[0].src}" alt="${product.images}"><p>${product.description}</p><p>kr ${product.prices.price}</div>`;
  });
}
