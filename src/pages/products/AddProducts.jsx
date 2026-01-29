import { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function AddProducts() {
  const { setProductList, productList } = useContext(ProductContext);
  const [imageFile, setImageFile] = useState(null);

  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title.trim() ||
      !form.price ||
      !form.category.trim() ||
      !form.description.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(form.price) <= 0) {
      alert("Price must be greater than 0");
      return;
    }

    if (!imageFile) {
      alert("Please select a product image");
      return;
    }

    const newProducts = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
      rating: 0,
      image: URL.createObjectURL(imageFile),
    };

    setProductList((prev) => [...prev, newProducts]);
  };
  const uniqueCategories = [...new Set(productList.map((p) => p.category))];
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow rounded-lg p-6 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            type="text"
            placeholder="Enter product name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter product description"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="w-full border rounded px-3 py-2 bg-white"
          />
          {imageFile && (
            <img src={URL.createObjectURL(imageFile)} alt="preview" />
          )}
        </div>
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-4">Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                type="number"
                placeholder="0.00"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Discount Price
              </label>
              <input
                name="discount"
                value={form.discount}
                onChange={handleChange}
                type="number"
                placeholder="0.00"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              className="w-full border rounded px-4 py-2"
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Stock Quantity
            </label>
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              type="number"
              placeholder="0"
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            className="px-5 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
