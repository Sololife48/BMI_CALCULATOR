function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var heightM = height / 100;
  var bmi = weight / heightM ** 2;

  document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
  var ex;
  var color;
  if (bmi < 18.5) {
    document.getElementById("explain").innerHTML = "ต่ำกว่ามาตรฐาน";
    color = "yellow";
  } else if (bmi < 25) {
    document.getElementById("explain").innerHTML = "มาตรฐาน";
    color = "green";
  } else if (bmi < 30) {
    document.getElementById("explain").innerHTML = "เกินมาตรฐาน";
    color = "orange";
  } else {
    document.getElementById("explain").innerHTML = "เกินมาตรฐานมาก";
    color = "red";
  }

  document.getElementById("result").innerHTML = "ฺBMI ของคุุณคือ " + "<br>" + bmi.toFixed(2);
  document.getElementById("result").classList.add(ex);
  document.getElementById("result").classList.add(color);
}
