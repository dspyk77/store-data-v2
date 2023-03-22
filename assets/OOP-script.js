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
    this.displayIndexTable = document.querySelector("#index-table");
    this.displayShowTable = document.querySelector("#show-item");

    this.showTableId = document.querySelector("#show-table-id");
    this.showTableCategory = document.querySelector("#show-table-category");
    this.showTablePrice = document.querySelector("#show-table-price");
    this.showTableWeight = document.querySelector("#show-table-weight");
    this.showTableName = document.querySelector("#show-table-name");
    this.deleteIndex = document.querySelector("#del-item");
    this.displayErrorMsg = document.querySelector("#error-msg");
    this.showTableSection = document.querySelector("#show-table-section");
    this.indexTableSection = document.querySelector("#index-table-section");
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
      this.showTable();
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
      this.indexTableSection.hidden = false;
    } else {
      this.indexTableSection.hidden = true;
    }

    this.clearIndexTable();
    this.renderProducts();

    this.clearInputs();
  }

  deleteProduct() {
    const index = this.deleteIndex.value;
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

  renderProducts() {
    for (let i = 0; i < this.products.length; i++) {
      const product = this.products[i];
      this.displayIndexTable.insertAdjacentHTML(
        "beforeend",
        `
        <tr>
          <td>${i}</td>
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
    this.displayIndexTable.innerHTML = "";
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