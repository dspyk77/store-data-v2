class Product {
  constructor(category, name, price, weight) {
    this.category = category;
    this.name = name;
    this.price = price;
    this.weight = weight;
  }
}

class App {
  constructor() {
    this.products = [];
    this.bindElements();
    document.addEventListener("DOMContentLoaded", () => {
      this.bindEvents();
    });
    // this.hideErrorMsg();
  }

  bindElements() {
    this.nameInput = document.querySelector("#name-input");
    this.priceInput = document.querySelector("#price-input");
    this.weightInput = document.querySelector("#weight-input");
    this.categoryInput = document.querySelector("#category-input");
    this.displayItemValue = document.querySelector("#display-item-value");
    this.displayShowTable = document.querySelector("#show-item");
    this.deleteIndex = document.querySelector("#del-item-input");
    this.displayErrorMsg = document.querySelector("#error-msg");
    this.displayTableDiv = document.querySelector("#display-table-div");
    this.indexTable = document.querySelector("#display-index-table");
    this.displayTable = document.querySelector("#display-table");
    this.displayItemInput = document.querySelector("#display-item-input")
  }

  bindEvents() {

    console.log(document.querySelector("#add-item-btn"));

    document.querySelector("#add-item-btn").addEventListener("click", () => {
      this.storeProduct();
    });

    document.querySelector("#del-item-btn").addEventListener("click", () => {
      console.log("Button clicked");
      this.deleteProduct();
    });

    document.querySelector("#show-item-btn").addEventListener("click", () => {
      this.displayIndexItem();
    });
  }

  storeProduct() {
    console.log("storeProduct called");

    const product = new Product(
      this.categoryInput.value,
      this.nameInput.value,
      this.priceInput.value,
      this.weightInput.value
    );

    this.products.push(product);
    console.log(this.products);

    if (this.products.length > 0) {
      this.displayTable.hidden = false;
    } else {
      this.displayTable.hidden = true;
    }

    this.clearIndexTable();
    this.renderProducts();

    this.clearInputs();
  }

  deleteProduct() {
    const index = (this.deleteIndex.value - 1);
    // if (index >= 0 && index < this.products.length) {
      this.products.splice(index, 1);
      console.log("Remaining products:");
      console.log(this.products);
      this.clearInputs();
      this.clearIndexTable();
      this.renderProducts();
    // } else {
    //   this.displayErrorMsg.hidden = false;
    //   setTimeout(() => this.hideErrorMsg(), 2000);
    // }
  }

  displayIndexItem() {
    console.log("displayIndexItem() was called!")
    const index = this.displayItemInput.value;
    const selectedItem = this.products[(index - 1)];
    this.displayItemInput.insertAdjacentHTML(
      "beforeend",
      `
        <label class="fw-bold text-decoration-underline" for="table">Selected Item</label>
        <table class="table table-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Category:</th>
              <th scope="col">Name:</th>
              <th scope="col">Price:</th>
              <th scope="col">Weight:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${selectedItem.category}</td>
              <td>${selectedItem.name}</td>
              <td>${"$"}${selectedItem.price}</td>
              <td>${selectedItem.weight}</td>
            </tr>
          </tbody>
        </table>
      `
    );
  }

  renderProducts() {
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      this.displayItemValue.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
          <td>${(i + 1)}</td>
          <td>${product.category}</td>
          <td>${product.name}</td>
          <td>${"$"}${product.price}</td>
          <td>${product.weight}${"lbs"}</td>
        </tr>
      `
      );
    }
  }

  clearIndexTable() {
    this.displayItemValue.innerHTML = "";
  }
  
  clearShowTableValue() {
    this.showTableId.innerHTML = "";
    this.showTableCategory.innerHTML = "";
    this.showTablePrice.innerHTML = "";
    this.showTableWeight.innerHTML = "";
    this.showTableName.innerHTML = "";
  }

  clearInputs() {
    this.nameInput.innerHTML="";
    this.priceInput.innerHTML="";
    this.weightInput.innerHTML="";
    this.categoryInput.innerHTML="";
  }
  
}

new App();