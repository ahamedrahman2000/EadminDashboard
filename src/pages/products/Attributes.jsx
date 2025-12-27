export default function Attributes() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Product Attributes</h1>
 
      <div className="space-y-6">
 
        <div className="bg-white shadow rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Size</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Add Value
            </button>
          </div>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Value</th>
                <th className="border px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Small</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Medium</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
 
        <div className="bg-white shadow rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Color</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Add Value
            </button>
          </div>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Value</th>
                <th className="border px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Red</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Blue</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
 
        <div className="bg-white shadow rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Brand</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Add Value
            </button>
          </div>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Value</th>
                <th className="border px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Nike</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Adidas</td>
                <td className="border px-4 py-2 text-right space-x-2">
                  <button className="text-blue-600">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
