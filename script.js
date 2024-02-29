const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function () {
  //VAariable
  const income = document.getElementById("income").innerText;
  const rentInput = document.getElementById("rent");
  const foodInput = document.getElementById("food");
  const utilitiesInput = document.getElementById("utilities");
  const insuranceInput = document.getElementById("insurance");
  const expensesDiv = document.getElementById("expenses");
  const balanceDiv = document.getElementById("balance");
  const errorText = document.getElementById("error-text");

  //Value
  const incomeValue = parseFloat(income);
  const rentValue = parseFloat(rentInput.value);
  const foodValue = parseFloat(foodInput.value);
  const utilitiesValue = parseFloat(utilitiesInput.value);
  const insuranceValue = parseFloat(insuranceInput.value);

  if (
    rentValue >= 0 &&
    foodValue >= 0 &&
    utilitiesValue >= 0 &&
    insuranceValue >= 0
  ) {
    const cost = rentValue + foodValue + utilitiesValue + insuranceValue;
    const balance = incomeValue - cost;
    expensesDiv.innerText = cost;
    balanceDiv.innerText = balance;
    expensesDiv.innerText = cost;
    rentInput.value = "";
    foodInput.value = "";
    utilitiesInput.value = "";
    insuranceInput.value = "";
  } else {
    errorText.innerHTML = `<p class="text-warning">Please fill all the box</p>`;
  }
});
