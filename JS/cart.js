const cartEl = document.getElementById("Shopping-Cart");
const billEl = document.getElementById("max");

let basket = JSON.parse(localStorage.getItem("Cart")) || [];

function renderCart() {
  let totalBill = null;
  cartEl.innerHTML = null;
  for (let i in basket) {
    for (key in ShopItemsData) {
      if (basket[i].ID == ShopItemsData[key].id) {
        totalBill += ShopItemsData[key].price * basket[i].item;

        cartEl.innerHTML += `
        <div class="single-prs-bill">
        <div id="product-id-${ShopItemsData[key].id}" class="single-product">
          <div class="name-thumbnail">
            <img src="${ShopItemsData[key].image}" />
            <h5 class="product-name">${ShopItemsData[key].name}<span>(x${
          basket[i].item
        })</span></h5>
          </div>
          <div class="pr-content">
            <h5>${convertVND(ShopItemsData[key].price)}</h5>
            <div class="buttons">
              <i onclick="decrement(${
                basket[i].ID
              })" class="fa-solid fa-minus"></i>
              <div id="${basket[i].ID}" class="quantity">${basket[i].item}</div>
              <i onclick="increment(${
                basket[i].ID
              })" class="fa-solid fa-plus"></i>
            </div>
            <div class="Delete" onclick="removeItems(${basket[i].ID})">
              <i class="fa-solid fa-x"></i>
              <p>Delete</p>
            </div>
          </div>
        </div>
      </div>
        `;
      }
    }
  }
  if (totalBill == null) {
    const totalEl = document.getElementById("total");
    totalEl.innerHTML = `<h1>Giỏ hàng trống</h1>`;
  } else {
    billEl.innerText = convertVND(totalBill);
  }
}
renderCart();

function decrement(id) {
  const quantity = document.getElementById(id);
  let search = basket.find((x) => x.ID === id);
  if (quantity.innerText > 0) {
    quantity.innerText--;
    search.item -= 1;
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("Cart", JSON.stringify(basket));
    renderCart();
    Calculation();
  }
}

function increment(id) {
  const quantity = document.getElementById(id);
  let search = basket.find((x) => x.ID === id);
  quantity.innerText--;
  search.item += 1;
  localStorage.setItem("Cart", JSON.stringify(basket));
  renderCart();
  Calculation();
}

function removeItems(id) {
  const cfm = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
  if (cfm) {
    basket = basket.filter((x) => x.ID !== id);
    localStorage.setItem("Cart", JSON.stringify(basket));
    renderCart();
    Calculation();
  }
}

Calculation();
function Calculation() {
  const cartAmout = document.getElementById("cartAmount");
  let TotalQuantity = null;
  for (let i in basket) {
    TotalQuantity += basket[i].item;
  }

  TotalQuantity > 0
    ? (cartAmout.innerText = TotalQuantity)
    : (cartAmout.innerText = "0");
}
