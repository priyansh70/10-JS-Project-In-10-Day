function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim();
  console.log(yourName);

  const partnerName = document.getElementById("partnerName").value.trim();
  console.log(partnerName);

  if (yourName == "") {
    alert("Please Enter your Name");
  } else if (yourName.length <= 2) {
    alert("Min lenght is 3");
  } else if (!isNaN(yourName)) {
    alert("Numbers are not allowed");
  } else if (partnerName == "") {
    alert("Please Enter Your Partner Name");
  } else if (partnerName.length <= 2) {
    alert("Min lenght is 3");
  } else if (!isNaN(partnerName)) {
    alert("Numbers are not allowed");
  } else {
    // Love Logic 😂
    const lovePercentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");

    result.innerHTML = `${yourName} and ${partnerName}'s Love Percentage: ${lovePercentage}`;
  }
}
