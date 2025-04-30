function calculateBMI() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("result").innerHTML =
      "Please enter valid height and weight values.";
    return;
  }

  let bmi = weight / ((height / 100) * (height / 100));
  let bmiCategory;
  let normalRange;

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
    normalRange = "Normal weight range: 18.5 - 24.9";
  } else if (bmi < 25) {
    bmiCategory = "Normal weight";
    normalRange = "Your weight is normal";
  } else if (bmi < 30) {
    bmiCategory = "Overweight";
    normalRange = "Normal weight range: 18.5 - 24.9";
  } else {
    bmiCategory = "Obesity";
    normalRange = "Normal weight range: 18.5 - 24.9";
  }

  document.getElementById("result").innerHTML =
    "<div class='result'>Your BMI is: " +
    bmi.toFixed(2) +
    " (" +
    bmiCategory +
    ")<br>" +
    "<span class='normal-range'>" +
    normalRange +
    "</span>" +
    "</div>";
}

function clearInputs() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("result").innerHTML = "";
}
