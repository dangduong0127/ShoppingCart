const prs = document.getElementById("products");
let basket = JSON.parse(localStorage.getItem("Cart")) || [];

let generateShop = () => {
  for (let key in ShopItemsData) {
    console.log(ShopItemsData[key]);
    prs.innerHTML += `
    <div id="product-id-1" class="single-product">
    <img src="${ShopItemsData[key].image}">
    <div class="pr-content">
        <h5 class="product-name">${ShopItemsData[key].name}</h5>
        <h6><b>Price:</b>${ShopItemsData[key].price} đ</h6>
        <div class="buttons">
            <i onclick="decrement(${ShopItemsData[key].id})" class="fa-solid fa-minus"></i>
            <div id="${ShopItemsData[key].id}" class="quantity">0</div>
            <i onclick="increment(${ShopItemsData[key].id})" class="fa-solid fa-plus"></i>
        </div>
        <button onclick="addToCart(${ShopItemsData[key].id})">Thêm vào giỏ hàng</button>
    </div>
</div>
    `;
  }
};

generateShop();

function decrement(id) {
  const quantity = document.getElementById(id);
  if (quantity.innerText > 0) {
    quantity.innerText--;
  }
}

function increment(id) {
  const quantity = document.getElementById(id);
  quantity.innerText++;
}

function addToCart(id) {
  const quantity = document.getElementById(id);
  // console.log(quantity.innerText);
  let search = basket.find((x) => x.ID === id);
  // console.log(search);
  if (quantity.innerText != 0) {
    if (search == undefined) {
      basket.push({
        ID: id,
        item: Number(quantity.innerText),
      });
    } else {
      search.item += Number(quantity.innerText);
    }
    localStorage.setItem("Cart", JSON.stringify(basket));
    alert("Thêm vào giỏ hàng thành công!!!");
    quantity.innerText = 0;
    Calculation();
  } else {
    alert("Vui lòng thêm số lượng!!!");
  }
}

//Cal Cart quantity
Calculation();
function Calculation() {
  const cartAmout = document.getElementById("cartAmount");
  let TotalQuantity = null;
  for (let i in basket) {
    TotalQuantity += basket[i].item;
  }
  if (TotalQuantity > 0) {
    cartAmout.innerText = TotalQuantity;
  } else {
    cartAmout.innerText = "0";
  }
}
