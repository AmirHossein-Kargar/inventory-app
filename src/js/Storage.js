const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "'2024-07-20T08:32:19.057Z'",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "'2023-10-10T08:32:19.057Z'",
  },
];
const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of application",
    createdAt: "2024-08-10T08:32:19.057Z",
  },
  {
    id: 2,
    title: "backend",
    description: "backend of the application",
    createdAt: "'2023-09-10T08:32:19.057Z'",
  },
];

export default class Storage {
  // ? add new category

  // ? get all categories
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];

    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
  // ? save category
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    const existedItem = savedCategories.find((c) => c.id == categoryToSave.id);
    if (existedItem) {
      // ? edit
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      // ? new
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];

    return savedProducts.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
  }
  static saveProducts(productToSave) {
      const savedProducts = Storage.getAllProducts();
      const existedItem = savedProducts.find(
        (c) => c.id == productToSave.id
      );
      if (existedItem) {
        // ? edit
        existedItem.title = productToSave.title;
        existedItem.quantity = productToSave.quantity;
        existedItem.category = productToSave.category
      } else {
        // ? new
        productToSave.id = new Date().getTime();
        productToSave.createdAt = new Date().toISOString();
        savedProducts.push(productToSave);
      }
      localStorage.setItem("products", JSON.stringify(savedProducts));
  }
}
