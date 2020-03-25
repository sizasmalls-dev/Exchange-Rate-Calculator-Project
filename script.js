// fetch API
// function calculate() {
//   fetch("items.json")
//     .then(res => res.json())
//     .then(data => (document.body.innerHTML = data[3].text));
// }

// calculate();

// lets Create some variables to make the inputs Function

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amoutnEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// fetch exchange rate and Update the DOM

function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(
    `https://prime.exchangerate-api.com/v5/012ac0685f0d290e444db1fe/latest/${currency_one}`
  )
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.conversion_rates[currency_two];
      // console.log(rate);
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amoutnEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

//Adding Event Listeners
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amoutnEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();
