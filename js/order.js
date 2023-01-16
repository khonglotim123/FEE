let products = [
  {
    id: 1,
    image: "image/download.jfif",
    description: "MASSA AST color: black, Material: metal",
    quanlity: 5,
    price: 20,
    discout: 0,
  },
  {
    id: 2,
    image: "image/download.jfif",
    description: "MASSA AST color: black, Material: metal",
    quanlity: 1,
    price: 20,
    discout: 0,
  },
  {
    id: 3,
    image: "image/download.jfif",
    description: "MASSA AST color: black, Material: metal",
    quanlity: 1,
    price: 20,
    discout: 0,
  },
];

let totalprice = document.getElementById("total-price");
let totaldiscount = document.getElementById("total-discount");
let totaltax = document.getElementById("total-tax");

function load() {
  let bodytable = document.getElementById("tbody");
  let totalp = 0;
  let totald = 0;
  let totalt = 0;
  bodytable.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let tax = Math.round(products[i].quanlity * products[i].price * 0.125);
    let total =
      products[i].quanlity * products[i].price - (products[i].discout + tax);
    totalp += total;
    totald += products[i].discout;
    totalt += tax;

    bodytable.innerHTML += `
        <td><img src="${products[i].image}" alt=""></td>
        <td>${products[i].description}</td>
        <td class="update">
          <input id="input${i}" type="text" value="${products[i].quanlity}" disabled/>
          <button id="tru" onclick="tru(${i})">-</button>
          <button id="cong" onclick="cong(${i})">+</button>
          <button id="xoa" onclick="remove(${i})">x</button>
        </td>
        <td>$${products[i].price}</td>
        <td>$${products[i].discout}</td>
        <td>$${tax}</td>
        <td>$${total}</td>`;
  }
  totalprice.innerText = "$" + totalp;
  totaldiscount.innerText = "$" + totald;
  totaltax.innerText = "$" + totalt;
}
load();

function tru(index) {
  let inputindex = document.getElementById("input" + index).value;
  if (products[index].quanlity > 1) {
    products[index].quanlity = parseInt(inputindex) - 1;
    load();
  }
}

function cong(index) {
  let inputindex = document.getElementById("input" + index).value;

  products[index].quanlity = parseInt(inputindex) + 1;
  load();
}

function remove(i) {
  products.splice(i, 1);
  load();
}
