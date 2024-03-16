

let html = "";

products.forEach((item) => {
    const starsCount = item.rating.stars * 10
    html += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${item.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
    ${item.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${starsCount}.png">
      <div class="product-rating-count link-primary">
        ${item.rating.count}
      </div>
    </div>

    <div class="product-price">
      ${item.priceCents / 100}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-button" data-product-name="${item.name}">
      Add to Cart
    </button>
  </div>`

  // console.log(html);
})

 document.querySelector(".products-grid").innerHTML = html;

 document.querySelectorAll(".js-add-button").forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;

    let mathchingItem;

    cart.forEach((item) => {
     if (item.productName === productName){
      mathchingItem = item;
     }
    });

    if (mathchingItem) {
      mathchingItem.quantity++;
    }else {
      cart.push({
        productName: productName,
        quantity: 1,
      });
    }
    let totalQuantiti = 0;
    cart.forEach((item) => {
      totalQuantiti += item.quantity
    })
    document.querySelector(".cart-quantity").innerHTML = totalQuantiti
    console.log(cart);
  })
 })

