window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let numberSelect = document.getElementById("number");
  let productSelect = document.getElementById("goods");
  let parameterSelect = document.getElementById("radios");
  let colorSelect = document.getElementById("select2");
  let resultDiv = document.getElementById("result");

  function calculateTotal() {
    let num = numberSelect.value;
    let productPrice = parseInt(productSelect.value);
    let radioValue = getSelectedRadioValue();
    let colorMultiplier = parseFloat(colorSelect.value);

    let regex = /^\d+$/;
    let isValid = regex.test(num);

    if (isValid && productPrice > 0) {
      let total = (parseInt(num) * productPrice + parseInt(radioValue)) * colorMultiplier;
      resultDiv.innerHTML = "Стоимость: " + total + " руб.";
    } else if (!isValid && num !== "") {
      resultDiv.innerHTML = "Введите корректное количество";
    } else {
      resultDiv.innerHTML = "Выберите тип товара";
    }
  }

  function getSelectedRadioValue() {
    let radios = document.getElementsByName("radio-group");
    for (let radio of radios) {
      if (radio.checked) {
        return parseInt(radio.value);
      }
    }
    return 0;
  }

  productSelect.addEventListener("change", function(event) {
    let selectedOption = event.target.value;
    
    if (selectedOption === "150") { 
      parameterSelect.style.display = "flex";
      colorSelect.style.display = "flex";
    } 
    else if (selectedOption === "200") {
      parameterSelect.style.display = "none";
      colorSelect.style.display = "flex";
    } 
    else if (selectedOption === "250") { 
      parameterSelect.style.display = "flex";
      colorSelect.style.display = "none";
    } 
    else {
      parameterSelect.style.display = "none";
      colorSelect.style.display = "none";
    }
    
    calculateTotal();
  });

  
  numberSelect.addEventListener("input", calculateTotal);
  
  let radios = document.getElementsByName("radio-group");
  for (let radio of radios) {
    radio.addEventListener("change", calculateTotal);
  }
  
  colorSelect.addEventListener("change", calculateTotal);

  calculateTotal();
});
