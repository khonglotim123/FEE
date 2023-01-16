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
    quanlity: 6,
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

const load = () => {
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
            <button id="tru${i}" onclick="minus(${products[i].id})">-</button>
            <button id="cong${i}">+</button>
            <button id="xoa${i}">x</button>
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




$("#tru1").click(function () {
  let valueinput = $("#input1").val();
  if (products[1].quanlity > 1) {
    products[1].quanlity = parseInt(valueinput) - 1;
    load();
  }
});
