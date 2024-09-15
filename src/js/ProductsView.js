import Storage from "./Storage.js";
const addNewProductBtn = document.getElementById("add-new-product");
class productsView {
  constructor() {
    addNewProductBtn.addEventListener("click", (e) => this.addNewProduct(e));
    this.products = [];
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
    this.createProductsList();
  }
  createProductsList() {
    let result = "";
    this.products.forEach((item) => {
      // ! error
      const selectedCategory = Storage.getAllCategories().find((c) => c.id = item.category);
      result += `<div class="flex items-center justify-between capitalize mb-4">
          <span class="text-slate-400">${item.title}</span>
          <div class="flex items-center gap-x-3">
            <span class="text-slate-400">${new Date().toLocaleDateString('fa')}</span>
            <span
              class="block px-3 py-0.5 text-slate-400 text-sm border border-slate-400 rounded-2xl capitalize "
              >${item.title}</span
            >
            <span
              class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slae-300"
              >${item.quantity}</span>
              <button class="border px-3 py-0.5 rounded-2xl border-red-300 text-red-300 text-sm capitalize" data-id=${item.id}>delete</button>
          </div>
        </div>`;
    });
    const productsDOM = document.getElementById("products-list");
    productsDOM.innerHTML = result;
  }
}

export default new productsView();
