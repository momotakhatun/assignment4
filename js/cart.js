import product from "./product.js";
const shoppingCart = document.getElementById("shopping-cart");
const cart = {
  cartArray: [],
  totalAmount: 0,
  addcart(productId) {
    const selectproduct = product.find((p) => p.id === productId);
    const existingProduct = this.cartArray.find((p) => p.id === productId);
    console.log(existingProduct);
    // console.log(selectproduct);
    let quantity = 0;
    if (existingProduct && selectproduct) {
      quantity = existingProduct.quantity + 1;
    } else {
      quantity = 1;
    }
    const cartItemArray = {
      id: selectproduct.id,
      name: selectproduct.name,
      price: selectproduct.price,
      quantity: quantity,
    };

    if (existingProduct) {
      existingProduct.quantity = quantity;
    } else {
      this.cartArray.push(cartItemArray);
    }
    this.displayCart();
  },

  displayCart() {
    if (this.cartArray.length > 0) {
      shoppingCart.innerHTML = "";
      this.cartArray.map((product) => {
        return (shoppingCart.innerHTML += `<div class="card p-2">
            <h5 class="card-title">${product.name}</h5>
            <div>${product.price}-<span>${product.quantity}</span></div>
            <button data-item-id="${product.id}" class="btn btn-danger remove-btn">Remove</button>
          </div> `);
      });
    } else {
      shoppingCart.innerHTML = "";
    }
    const removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((item) => {
      item.addEventListener("click", () => {
        const productId = parseInt(item.dataset.itemId);
        this.removeCart(productId);

        // this.displayCart();
      });
    });
  },
  removeCart(productId) {
    const findindex = this.cartArray.findIndex(
      (cartItem) => cartItem.id === productId
    );
    console.log(this.cartArray);
    if (findindex !== -1) {
      this.cartArray.splice(findindex, 1);
    }
    this.displayCart();
  },
};
export default cart;
