export default function StoreInfo() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Store Information</h1>

      <form className="bg-white shadow rounded p-6 space-y-4 max-w-lg">
        <div>
          <label className="block text-gray-700 mb-1">Store Name</label>
          <input
            type="text"
            placeholder="My Online Store"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Store URL</label>
          <input
            type="text"
            placeholder="https://mystore.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Address</label>
          <textarea
            rows="3"
            placeholder="123 Main Street, City, Country"
            className="w-full border px-3 py-2 rounded"
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Contact Email</label>
          <input
            type="email"
            placeholder="contact@mystore.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Store Info
        </button>
      </form>
    </div>
  );
}
