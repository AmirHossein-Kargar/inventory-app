import Storage from "./Storage.js";
const addNewProductBtn = document.getElementById("add-new-product");
const searchInput = document.querySelector("#search-input");
const selectedSort = document.querySelector("#sort-products");

class productsView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
    this.products = [];
    searchInput.addEventListener("input", (e) => this.searchInput(e));
    selectedSort.addEventListener('change', (e) => this.sortProduct(e))
  }
  setApp() {
    this.products = Storage.getAllProducts();
  }

  addNewProduct(e) {
    e.preventDefault();
    const title = document.querySelector("#product-title").value;
    const quantity = document.querySelector("#product-quantity").value;
    const category = document.querySelector("#product-category").value;

    if (!title || !quantity || !category) return;

    Storage.saveProducts({ title, category, quantity });
    this.products = Storage.getAllProducts();
    this.createProductsList(this.products);
  }
  createProductsList(products) {
    let result = "";
    products.forEach((item) => {
      // ! error
      const selectedCategory = Storage.getAllCategories().find(
        (c) => (c.id = item.category)
      );
      result += `<div class="flex items-center justify-between capitalize mb-4">
          <span class="text-slate-400">${item.title}</span>
          <div class="flex items-center gap-x-3">
            <span class="text-slate-400">${new Date().toLocaleDateString(
              "fa"
            )}</span>
            <span
              class="block px-3 py-0.5 text-slate-400 text-sm border border-slate-400 rounded-2xl capitalize "
              >${item.title}</span
            >
            <span
              class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slae-300"
              >${item.quantity}</span>
              <button class="border px-3 py-0.5 rounded-2xl border-red-300 text-red-300 text-sm capitalize" data-id=${
                item.id
              }>delete</button>
          </div>
        </div>`;
    });
    const productsDOM = document.getElementById("products-list");
    productsDOM.innerHTML = result;
  }
  searchInput(e) {
    const value = e.target.value.trim().toLowerCase();
    const filteredProducts = this.products.filter((p) =>
      p.title.toLowerCase().includes(value)
    );
    console.log(this.products);
    this.createProductsList(filteredProducts);
  }
  sortProduct(e) {
    const value = e.target.value;
    console.log({value});
    this.products = Storage.getAllProducts(value)
    this.createProductsList(this.products)
  }
}

export default new productsView();
