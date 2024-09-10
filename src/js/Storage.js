const products = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    updated: "'2024-07-20T08:32:19.057Z'",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    updated: "'2023-10-10T08:32:19.057Z'",
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
  // ? save category
  
  // ? get all categories
  static getAllCategories() {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];

    const sortedCategories = savedCategories.sort((a, b) => {
      return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    });
    return sortedCategories;
  }
}
