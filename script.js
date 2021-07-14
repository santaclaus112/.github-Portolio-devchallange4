const email = document.getElementById("email");
const phone = document.getElementById("phone");
const name = document.getElementById("name");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const postalCode = document.getElementById("postal-code");
const continueBtn = document.getElementById("continue-btn");
const minusButtons = document.querySelectorAll(".minus-btn");
const plusButtons = document.querySelectorAll(".plus-btn");
const totalCostOutput = document.getElementById("total-cost-output");

let cartTotal = 148.98;

document.addEventListener("DOMContentLoaded", () => {
  totalCostOutput.innerText = cartTotal;
});

minusButtons.forEach((mb) => {
  mb.addEventListener("click", (e) => {
    const nes = e.target.nextElementSibling;
    if (nes.innerText > 1) {
      nes.innerText--;
      cartTotal = cartTotal - +nes.getAttribute("data-cost");
      totalCostOutput.innerText = cartTotal.toFixed(2);
    }
  });
});

plusButtons.forEach((pb) => {
  pb.addEventListener("click", (e) => {
    const pes = e.target.previousElementSibling;
    pes.innerText++;
    cartTotal = cartTotal + +pes.getAttribute("data-cost");
    totalCostOutput.innerText = cartTotal.toFixed(2);
  });
});

continueBtn.addEventListener("click", () => {
  let error = "";

  [email, phone, name, address, city, country, postalCode].forEach((input) => {
    if (input.value === "") {
      error += `${input.id} is required. `;
    }
  });

  console.log(error);

  if (error !== "") {
    alert("Enter all fields to proceed.");
  } else {
    alert("Success!");
  }
});
