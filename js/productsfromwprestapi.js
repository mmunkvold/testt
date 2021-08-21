const baseUrl = "https://monicamunkvoldnikolaisen.no/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".productfromrestapi");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
    <a href="productdetails.html?id=${product.id}" ><p class="new-label">${product.tags[0].name}</p>
    <img class="product-image" src="${product.images[0].src}"/><h3>${product.name}</h3></a>
    <div class="product-price">Price: ${product.prices.regular_price},-</div>
    <div class="center"><button id="newbutton" class="add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div></div>`;
  });
}

getProducts(baseUrl);
