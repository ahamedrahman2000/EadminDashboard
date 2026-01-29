import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function AllProducts() {
  const { productList, setProductList } = useContext(ProductContext);

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleEdit = (product) => {
    setEditingId(product.id);
    setTitle(product.title);
    setPrice(product.price);
    setCategory(product.category);
  };

  const handleUpdate = () => {
    setProductList((prev) =>
      prev.map((p) =>
        p.id === editingId
          ? { ...p, title, price, category }
          : p
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <table className="w-full border border-gray-300">
        <thead className="sticky top-14 bg-gray-100">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Ratings</th>
            <th className="border p-2">Inventory</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {productList.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.id}</td>
              <td className="border p-2">{p.title}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">$ {p.price}</td>
              <td className="border p-2">{p.description}</td>
              <td className="border p-2">{p.rating}</td>
              <td className="border p-2">{p.reviews}</td>

              <td className="border p-2">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-500 px-2 py-1 text-white rounded"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleEdit(p)}
                    className="bg-gray-200 px-4 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => setImage(p.image)}
                    className="bg-gray-200 px-4 py-1 rounded"
                  >
                    👁️
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-4 bg-white rounded max-w-md w-full">
            <h2 className="font-bold mb-4">Edit Product</h2>

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 mb-2 w-full"
              placeholder="Title"
            />

            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border p-2 mb-2 w-full"
              placeholder="Price"
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 mb-4 w-full"
              placeholder="Category"
            />

            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Update
            </button>
          </div>
        </div>
      )}

      {image && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={image}
              alt="Preview"
              className="max-w-md rounded shadow"
            />

            <button
              onClick={() => setImage(null)}
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
