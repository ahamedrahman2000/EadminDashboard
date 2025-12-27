export default function Inventory() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Inventory</h1>
 
      <div className="bg-white shadow rounded-lg p-4 mb-6 flex flex-wrap gap-4">
        <select className="border rounded px-4 py-2">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>

        <select className="border rounded px-4 py-2">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Books</option>
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
            <tr>
              <td className="border px-4 py-2">Laptop Pro</td>
              <td className="border px-4 py-2">LP-1001</td>
              <td className="border px-4 py-2 text-center">45</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  In Stock
                </span>
              </td>
              <td className="border px-4 py-2">Warehouse A</td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button className="text-blue-600">Restock</button>
                <button className="text-gray-600">Edit</button>
              </td>
            </tr>
 
            <tr>
              <td className="border px-4 py-2">Running Shoes</td>
              <td className="border px-4 py-2">RS-2345</td>
              <td className="border px-4 py-2 text-center">5</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  Low Stock
                </span>
              </td>
              <td className="border px-4 py-2">Warehouse B</td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button className="text-blue-600">Restock</button>
                <button className="text-gray-600">Edit</button>
              </td>
            </tr>
 
            <tr>
              <td className="border px-4 py-2">JavaScript Book</td>
              <td className="border px-4 py-2">JS-8890</td>
              <td className="border px-4 py-2 text-center">0</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                  Out of Stock
                </span>
              </td>
              <td className="border px-4 py-2">Warehouse A</td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button className="text-blue-600">Restock</button>
                <button className="text-gray-600">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
 
      <div className="mt-6 bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p className="text-sm text-yellow-800">
          ⚠️ Some products are running low on stock. Consider restocking soon.
        </p>
      </div>
    </div>
  );
}
