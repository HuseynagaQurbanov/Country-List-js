var input = document.querySelector(".task .input-text");
var addBtn = document.querySelector(".task .add-btn");
var countryList = document.querySelector(".task .country-list");

addBtn.addEventListener("click", () => {
  var newList = document.createElement("li");

  newList.classList.add("list-group-item");

  newList.innerHTML = input.value;

  if (input.value == "") {
    return;
  } else {
    countryList.appendChild(newList);
    input.value = "";
  }
});