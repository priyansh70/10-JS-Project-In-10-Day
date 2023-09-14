document.getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan(){
  const loanAmount = parseFloat(document.getElementById("amount").value);
  const interestRate = parseFloat(
    document.getElementById("interestRate").value
  );
  const loanTerm = parseFloat(document.getElementById("loanTerm").value);

  if (isNaN(loanAmount) || isNaN(loanTerm) || isNaN(interestRate)) {
    alert("Please Enter Valid Numbers for all the Fields");
    return;
  }

  const monthlyInterest = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * monthlyInterest) /
    (1 - Math.pow(1 + monthlyInterest, -loanTerm));
  const totalInterest = monthlyPayment * loanTerm - loanAmount;

  displayResult(monthlyPayment, totalInterest);
};

function displayResult(monthlyPayment, totalInterest) {
  const result = document.getElementById("result");
  result.innerHTML = `
    <p><strong>Monthly Payment : Rs${monthlyPayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest : Rs${totalInterest.toFixed(2)}</strong></p>
    `;
}
