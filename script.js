function calculate(event) {
  event.preventDefault();
  let t1 = document.getElementById("number");
  let t2 = document.getElementById("goods");
  let res = document.getElementById("result");
  let rad = document.getElementById("radios");
  let sel = document.getElementById("select2")
  let regex = /^\d+$/;
  let isValid = regex.test(t1.value);
  
  if((isValid && parseInt(t2.value) != 0) && ((sel.style.display !== "none" && sel.value !== "1") || sel.style.display == "none" ))
  {
  alert("Вычисления окончены");
  let quantity = parseInt(t1.value);
  let price = parseInt(t2.value);
  let total = quantity * price;
  if(rad.style.display !== "none")
  {
    let selectedRadio = document.querySelector('input[name="radio-group"]:checked');
    if(selectedRadio) {
      total = total + parseInt(selectedRadio.value);
    }
  }
  if(sel.style.display !== "none")
  {
    total = total * parseInt(sel.value);
  }
  res.innerHTML = "Общая стоимость: " + total + " руб.";
  }
  
  else
  {
    alert("ОШИБКА!")
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("my-button");
  b.addEventListener("click", calculate);
  let s = document.getElementById("goods");
  s.addEventListener("change", function(event){
    let select = event.target;
    let radios = document.getElementById("radios");
    let sel = document.getElementById("select2")
    console.log(select.value);
    if(select.value == "250")
    {
       radios.style.display = "none";
    }
    else
    {
      radios.style.display = "flex";
    }
    if(select.value == "150")
    {
        sel.style.display = "none";
    }
    else
    {
       sel.style.display = "flex";
    }
  })

})
