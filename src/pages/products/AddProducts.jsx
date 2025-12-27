export default function AddProducts() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>

      <form className="bg-white shadow rounded-lg p-6 space-y-6">
 
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> 
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
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
            className="w-full border rounded px-3 py-2 bg-white"
          />
        </div> 
        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-4">Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Price
              </label>
              <input
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
                type="number"
                placeholder="0.00"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select className="w-full border rounded px-4 py-2">
              <option>Select category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Books</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Stock Quantity
            </label>
            <input
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
