var copyrightYear = document.querySelector("#copyright")

copyrightYear.innerHTML = new Date().getFullYear();

var nameInput = document.querySelector("#name-input");
var priceInput = document.querySelector("#price-input");
var weightInput = document.querySelector("#weight-input");
var categoryInput = document.querySelector("#category-input");
var displayIndexTable = document.querySelector("#index-table");
var displayShowTable = document.querySelector("#show-item");
var showTableId = document.querySelector("#show-table-id");
var showTableCategory = document.querySelector("#show-table-category");
var showTablePrice = document.querySelector("#show-table-price");
var showTableWeight = document.querySelector("#show-table-weight");
var showTableName = document.querySelector("#show-table-name");
var deleteIndex = document.querySelector("#del-item");
var displayErrorMsg = document.querySelector("#error-msg");
var showTableSection = document.querySelector("#show-table-section");
var indexTableSection = document.querySelector("#index-table-section");

var productsArr = [];
var product = {
  category: "",
  name: "",
  price: "",
  weight: "",
};

function storeProduct() {
  console.log("Product {} Before:");
  console.log(product);

  product = {
    category: categoryInput.value,
    name: nameInput.value,
    price: priceInput.value,
    weight: weightInput.value,
  };

  console.log("Product {} After:");
  console.log(product);

  productsArr.push(product);
  console.log(productsArr);

  if (productsArr.length >= 0) {
    indexTableSection.hidden = false;
  } else {
    indexTableSection.hidden = true;
  }

  clearIndexTable();

  renderNewArrayState();

  clearInputs();

  // first attempt
  // var id = productsArr.length - 1;

  // displayIndexTable.insertAdjacentHTML(
  //   "beforeend",
  //   `
  //   <tr>
  //     <td>${id}</td>
  //     <td>${product.category}</td>
  //     <td>${product.name}</td>
  //     <td>${product.price}</td>
  //     <td>${product.weight}</td>
  //   </tr
  // `
  // );
}

function deleteProduct() {
  if (deleteIndex.value >= 0 && deleteIndex.value <= (productsArr.length - 1)) {
    productsArr.splice(deleteIndex.value, 1);

    console.log("Remaining elemants:");
    console.log(productsArr);

    clearInputs();

    clearIndexTable();

    renderNewArrayState();
  } else {
    displayErrorMsg.hidden = false;
    setTimeout(hideErrorMsg, 2000);
  }
}

function renderNewArrayState() {
  // testing logic
  // console.log(productsArr)
  // console.log(productsArr[0])
  // console.log(productsArr[0].category)
  for (var i = 0; i < productsArr.length; i++) {
    var currentProduct = productsArr[i];
    displayIndexTable.insertAdjacentHTML(
      "beforeend",
      `
      <tr>
        <td>${i}</td>
        <td>${currentProduct.category}</td>
        <td>${currentProduct.name}</td>
        <td>${"$"}${currentProduct.price}</td>
        <td>${currentProduct.weight}${"lbs"}</td>
      </tr
    `
    );
  }
}

function clearIndexTable() {
  displayIndexTable.innerHTML = "";
}

function clearShowTableValue() {
  showTableId.innerHTML = "";
  showTableCategory.innerHTML = "";
  showTablePrice.innerHTML = "";
  showTableWeight.innerHTML = "";
  showTableName.innerHTML = "";
}

function showTable() {
  clearShowTableValue();
  if (displayShowTable.value >= 0 && displayShowTable.value <= (productsArr.length - 1)) {
    showTableSection.hidden = false;

    var elementIdInput = displayShowTable.value;

    var currentProduct = productsArr[elementIdInput];

    showTableId.innerHTML = elementIdInput;
    showTableCategory.innerHTML = currentProduct.category;
    showTablePrice.innerHTML = "$" + currentProduct.price;
    showTableWeight.innerHTML = currentProduct.weight + "lbs";
    showTableName.innerHTML = currentProduct.name;
  } else {
    displayErrorMsg.hidden = false;
    setTimeout(hideErrorMsg, 2000);
  }
}

function clearInputs() {
  nameInput.value = "";
  priceInput.value = "";
  weightInput.value = "";
  categoryInput.value = "";
  deleteIndex.innerHTML = "";
  displayShowTable.innerHTML = "";
}

// ====================================== resorce funtions - delete when finished ===============================================

function showAllCards() {
  clearCards();
  for (var i = 0; i < cardArr.length; i++) {
    displayCard.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card-display margin-10 card-box">
        <p>No: ${i} - ${cardArr}</p>
  [i]    </div>
    `
    );
  }
}
// removes all cards
function clearCards() {
  displayCard.innerHTML = "";
}

// hide/show error msg
function hideErrorMsg() {
  displayErrorMsg.hidden = true;
}

function delCard() {
  var deleteIndex = document.querySelector("#del-card");
  if (deleteIndex.value >= 0 && deleteIndex.value <= cardArr.length - 1) {
    cardArr.splice(deleteIndex.value, 1);
    showAllCards();
  } else {
    displayErrorMsg.hidden = false;
    setTimeout(hideErrorMsg, 2000);
  }
}

function randomCard() {
  clearCards();
  var randomNumber = getRandomInt(0, cardArr.length - 1);
  console.log(randomNumber);
  displayCard.insertAdjacentHTML(
    "beforeend",
    `
  <div class="card-display margin-10 card-box">
    <h4>The card selected is...</h4>
    <p>${cardArr[randomNumber]}!</p>
  </div>
  `
  );
}

function getRandomInt(min, max) {
  // The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// this function is for later use or for use in later projects. It checks input and sends an error if to high or low
function showCard() {
  if (displayInput.value >= 0 && displayInput.value <= cardArr.length - 1) {
    clearCards();
    displayCard.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card-display margin-10 card-box">
      <p>${cardArr[displayInput.value]}</p>
    </div>
    `
    );
  } else {
    clearCards();
    displayErrorMsg.hidden = false;
    setTimeout(hideErrorMsg, 2000);
  }
}

async function cat() {
  const response = await fetch('http://localhost:3000/users', { method: 'GET' });
  const data = await response.json(); 
  console.log(data)
}