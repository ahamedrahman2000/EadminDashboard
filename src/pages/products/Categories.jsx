import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function Categories() {
  const { productList, setProductList } = useContext(ProductContext);
  const uniqueCategories = [...new Set(productList.map((p) => p.category))];
  
  const [isOpen, setIsOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleDelete = (category) => {
    setProductList((prev) => prev.filter((p) => p.category !== category));
  };
  const handleAddCategory = () => {
    if (!newCategory.trim()) {
      alert("Category name required");
      return;
    }

    const exists = productList.some((p) => p.category === newCategory);

    if (exists) {
      alert("Category already exists");
      return;
    }

    setProductList((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "—",
        category: newCategory,
        price: 0,
      },
    ]);

    setNewCategory("");
    setIsOpen(false);
  };

  return (
    <div className="px-4">
      <div className="flex justify-end py-4 bg-white sticky top-12 z-20">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-400 rounded px-4 py-2 text-white font-medium"
        >
          Add Category
        </button>
      </div>

      <div className="max-h-[80vh] overflow-y-auto border relative">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-gray-100 z-20">
            <tr>
              <th className="border p-2">#</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">No of Products</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {uniqueCategories.map((category, index) => {
              const count = productList.filter(
                (p) => p.category === category
              ).length;

              return (
                <tr key={category} className="text-center">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{category}</td>
                  <td className="border p-2">{count}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleDelete(category)}
                      className="bg-red-500 px-3 py-1 text-white rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="p-4 bg-white rounded w-80">
              <h2 className="font-bold mb-3">Add Category</h2>

              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Category name"
                className="border p-2 w-full mb-3"
              />

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAddCategory}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
