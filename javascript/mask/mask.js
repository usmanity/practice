function maskPhoneNumber(event) {
  const mask = "(XXX) XXX-XXXX";
  var displayNumber = mask;
  var inputNumber = document.querySelector("input");
  var rawNumber = inputNumber.value.trim();
  console.log("working");
  rawNumber.split("").forEach(digit => {
    if (Number.isInteger(parseInt(digit))) {
      displayNumber = displayNumber.replace("X", digit);
    }
  });
  inputNumber.value = displayNumber.split("X").join("");
}
document.addEventListener("input", maskPhoneNumber);
