import product from "./product.js";
import cart from "./cart.js";

const productRanders = document.getElementById("productList");
product.map((product) => {
  return (productRanders.innerHTML += `
  
    <div class="card col-sm-2 clo-md-4" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">$${product.price}</h6>
      <button href="#" data-product-id="${product.id}" class="btn btn-primary cart-button">Add To Cart</button>
    </div>
  </div>`);
});

const cartbutton = document.querySelectorAll(".cart-button");
cartbutton.forEach((element) => {
  element.addEventListener("click", () => {
    const productId = parseInt(element.dataset.productId);
    cart.addcart(productId);
  });
});
cart.displayCart();
