const baseUrl = "https://monicamunkvoldnikolaisen.no/gamehub/wp-json/wc/store/products";
const productContainer = document.querySelector(".productfromrestapi");

const cart = document.querySelector(".cart");
const cartList = document.querySelector(".cart-list");
/* const totalContainer = document.querySelector(".total");*/
let cartArray = [];
//console.log(cartArray);

const cartItems = JSON.parse(localStorage.getItem("cartList"));
const cartContainer = document.querySelector(".cart-list");
const totalContainer = document.querySelector(".total");
let total = 0;

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  //console.log(products);
  productContainer.innerHTML = "";

  products.forEach(function (product) {
    productContainer.innerHTML += `<div class="product">
    <a href="productdetails.html?id=${product.id}" ><p class="new-label">${product.tags[0].name}</p>
    <img class="product-image" src="${product.images[0].src}"/><h3>${product.name}</h3></a>
    <div class="product-price">Price: ${product.prices.regular_price},-</div>
    <div class="center"><button class="newbutton add-to-cart-btn" data-product="${product.id}">Add to cart</button><i class="fas fa-heart"></i></div></div>`;
  });
  // adding items to cart
  let buyButton = Array.from(document.getElementsByClassName("add-to-cart-btn"));
  console.log(buyButton);

  buyButton.forEach(function (button) {
    button.onclick = function (event) {
      //console.log(event.target.dataset.product);
      console.log("clicked hohi");

      //const itemToAdd = productArray.find((item) => item.id === event.target.dataset.product);
      //console.log(itemToAdd); //I NEED TO CHANGE THIS, BUT CANT FIGURE OUT TO WHAT
      //cartArray.push(itemToAdd);
      cartArray.push(event.target.dataset.product.id);
      //console.log(cartArray);
      showCart(cartArray);
      localStorage.setItem("cartList", JSON.stringify(cartArray));
    };
  });
}

getProducts(baseUrl);

function showCart(cartItems) {
  cart.style.display = "block";
  cartList.innerHTML = "";
  let total = 0;

  cartItems.forEach(function (cartElement) {
    total += cartElement.price;
    cartList.innerHTML += `
    <div class="cart-item">
    <h4>${cartElement.name}</h4>
    <div style="background-image: url(${cartElement.image})" class="cart-image")></div>`;
  });
  totalContainer.innerHTML = `Total: kr ${total},-`;
}
