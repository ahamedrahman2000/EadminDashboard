import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function Inventory() {
  const { productList, setProductList } = useContext(ProductContext);
  const [editProduct, setEditProduct] = useState(null);
  const [editStock, setEditStock] = useState(0);

  const [stockFilter, setStockFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const categories = [...new Set(productList.map((p) => p.category))];

  const getStatus = (stock) => {
    if (stock === 0) return "out";
    if (stock <= 10) return "low";
    return "in";
  };

  const filteredProducts = productList.filter((p) => {
    const stock = p.stock ?? 0;
    const status = getStatus(stock);

    const stockMatch = stockFilter === "all" || stockFilter === status;

    const categoryMatch =
      categoryFilter === "all" || p.category === categoryFilter;

    return stockMatch && categoryMatch;
  });

  const handleRestock = (id) => {
    setProductList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, stock: (p.stock ?? 0) + 10 } : p))
    );
  };
  const handleSaveEdit = () => {
    setProductList((prev) =>
      prev.map((p) =>
        p.id === editProduct.id ? { ...p, stock: Number(editStock) } : p
      )
    );

    setEditProduct(null);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Inventory</h1>

      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-wrap gap-4">
        <select
          className="border rounded px-4 py-2"
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value)}
        >
          <option value="all">All Stock</option>
          <option value="in">In Stock</option>
          <option value="low">Low Stock</option>
          <option value="out">Out of Stock</option>
        </select>

        <select
          className="border rounded px-4 py-2"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Product</th>
              <th className="border px-4 py-3 text-left">SKU</th>
              <th className="border px-4 py-3 text-center">Stock</th>
              <th className="border px-4 py-3 text-center">Status</th>
              <th className="border px-4 py-3 text-left">Warehouse</th>
              <th className="border px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map((p) => {
              const stock = p.stock ?? 0;
              const status = getStatus(stock);

              return (
                <tr key={p.id}>
                  <td className="border px-4 py-2">{p.title}</td>
                  <td className="border px-4 py-2">{p.sku ?? "N/A"}</td>
                  <td className="border px-4 py-2 text-center">{stock}</td>
                  <td className="border px-4 py-2 text-center">
                    {status === "in" && (
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                        In Stock
                      </span>
                    )}
                    {status === "low" && (
                      <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                        Low Stock
                      </span>
                    )}
                    {status === "out" && (
                      <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                        Out of Stock
                      </span>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {p.warehouse ?? "Main Warehouse"}
                  </td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button
                      onClick={() => handleRestock(p.id)}
                      className="text-blue-600"
                    >
                      Restock
                    </button>
                    <button
                      onClick={() => {
                        setEditProduct(p);
                        setEditStock(p.stock ?? 0);
                      }}
                      className="text-gray-600"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}

            {filteredProducts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {productList.some((p) => (p.stock ?? 0) <= 10) && (
        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded">
          <p className="text-sm text-yellow-800">
            ⚠️ Some products are running low on stock. Consider restocking soon.
          </p>
        </div>
      )}

      {editProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Edit Stock</h2>

            <p className="text-sm mb-2">
              Product: <b>{editProduct.title}</b>
            </p>

            <input
              type="number"
              value={editStock}
              onChange={(e) => setEditStock(e.target.value)}
              className="w-full border rounded px-3 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditProduct(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveEdit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
