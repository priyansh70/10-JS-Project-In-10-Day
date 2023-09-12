const form = document.getElementById("bmiForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Values
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const heightFeet = parseInt(document.getElementById("heightFeet").value);
  const heightInches = parseInt(document.getElementById("heightInches").value);

  //   Validations
  if (gender && age && heightFeet && heightInches && weight) {
    const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254; // In Meters
    const bmi = weight / (heightInMeters * heightInMeters);
    const result = document.getElementById("result");

    let category = "";

    if (bmi < 18.5) category = "Under Weight ";
    else if (bmi >= 18.5 && bmi <= 24.9) category = "Normal Weight ";
    else if (bmi >= 25 && bmi <= 29.9) category = "Over Weight ";
    else category = "Obese ";

    result.innerHTML = `Your BMI: ${bmi.toFixed(2)} <br>Category: ${category}`;
  }
});
