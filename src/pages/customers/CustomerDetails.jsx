export default function CustomerDetails() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Customer Details</h1>
 
      <div className="bg-white shadow rounded p-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-gray-500 text-sm">Name</p>
          <p className="font-medium">John Doe</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Email</p>
          <p className="font-medium">john@email.com</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Phone</p>
          <p className="font-medium">+1 234 567 890</p>
        </div>

        <div>
          <p className="text-gray-500 text-sm">Status</p>
          <span className="inline-block px-3 py-1 text-xs bg-green-100 text-green-700 rounded">
            Active
          </span>
        </div>
      </div>
 
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-lg font-semibold mb-4">Address</h2>
        <p>123 Main Street</p>
        <p>New York, NY 10001</p>
        <p>United States</p>
      </div>
 
      <div className="bg-white shadow rounded p-6">
        <h2 className="text-lg font-semibold mb-4">Order History</h2>

        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Order ID</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-center">Total</th>
              <th className="border px-4 py-2 text-center">Status</th>
              <th className="border px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">#ORD001</td>
              <td className="border px-4 py-2">2024-02-12</td>
              <td className="border px-4 py-2 text-center">$250</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  Pending
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-blue-600">View</button>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">#ORD002</td>
              <td className="border px-4 py-2">2024-01-28</td>
              <td className="border px-4 py-2 text-center">$120</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Delivered
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-blue-600">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
