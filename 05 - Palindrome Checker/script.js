function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // console.log(str);

  const reverse = str.split("").reverse().join("");
  // console.log(reverse);

  return str === reverse;
}

function palindromeChecker() {
  const inputText = document.getElementById("inputText");
  const result = document.getElementById("result");

  if (isPalindrome(inputText.value)) {
    result.textContent = `"${inputText.value}" is a Palindrome`;
  } else {
    result.textContent = `"${inputText.value}" is Not a Palindrome`;
  }

  result.classList.add("fadeIn");
  inputText.value = "";
}

document
  .getElementById("checkButton")
  .addEventListener("click", palindromeChecker);
