function calculateTip() {
  // Get UI Element
  const billAmount = parseFloat(document.getElementById("billAmount").value);
  const serviceRating = parseFloat(
    document.getElementById("serviceRating").value
  );
  const splitCount = parseInt(document.getElementById("splitCount").value);
  const mealType = document.getElementById("mealType").value;
  const tipAmountOutput = document.getElementById("tipAmount");
  const totalAmountOutput = document.getElementById("totalAmount");
  const amountPerPersonOutput = document.getElementById("amountPerPerson");

  //   Validation
  if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(splitCount)) {
    tipAmountOutput.textContent = "Please Enter Valid Numbers";
    totalAmountOutput.textContent = "";
    amountPerPersonOutput.textContent = "";
    return;
  }

  //   Set Tip Value
  let tip;
  switch (serviceRating) {
    case 1:
      tip = billAmount * 0.05;
      break;

    case 2:
      tip = billAmount * 0.05;
      break;

    case 3:
      tip = billAmount * 0.15;
      break;

    case 4:
      tip = billAmount * 0.2;
      break;
  }

  //   Show Output on UI
  let totalAmount = billAmount + tip;
  let amountPerPerson = totalAmount / splitCount;

  if (mealType === "dinner") {
    tip += 5;
    totalAmount += 5;
    amountPerPerson += 5;
  }

  tipAmountOutput.textContent = `Tip: ₹${tip.toFixed(2)}`;
  totalAmountOutput.textContent = `Total Amount: ₹${totalAmount.toFixed(2)}`;
  amountPerPersonOutput.textContent = `Amount Per Person: ₹${amountPerPerson.toFixed(
    2
  )}`;
}

document.getElementById("calculateBtn").addEventListener("click", calculateTip);
