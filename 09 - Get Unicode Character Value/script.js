function detectChar() {
  const input = document.getElementById("inputType").value;
  const result = document.getElementById("result");
  if (input) {
    const unicodeValue = input.charCodeAt(0);
    result.innerHTML = `The Unicode value of <strong>"${input}"</strong> is <strong>${unicodeValue}</strong>`;
  } else {
    result.textContent = "Please Enter a Character";
  }
}
