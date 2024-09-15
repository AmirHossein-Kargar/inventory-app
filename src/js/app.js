import CategoryView from "./CategoryView.js";
import ProductsView from "./ProductsView.js";
// class App {

// }

document.addEventListener("DOMContentLoaded", () => {
  CategoryView.setApp();
  ProductsView.setApp()
  CategoryView.createCategoriesList();
  ProductsView.createProductsList()
  // console.log(Storage.getAllCategories());
  // console.log(ProductsView.products);  
});

// ! All We Need
// ? 1. create category
// ? 2. create product based on selected category
// ? 3. edit product
// ? 4. remove product
// ? 5. save product in local storage
// ? => storage Class for handle application methods
// ? => product view Class
// ? => category view Class
// ? => main and app Class
