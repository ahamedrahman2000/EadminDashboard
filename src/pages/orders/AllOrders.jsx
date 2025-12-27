export default function AllOrders() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Orders</h1>
 
      <div className="flex gap-4 mb-6">
        <select className="border px-4 py-2 rounded">
          <option>All Status</option>
          <option>Pending</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>

        <input
          type="text"
          placeholder="Search by Order ID or Customer"
          className="border px-4 py-2 rounded w-64"
        />
      </div>
 
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Order ID</th>
              <th className="border px-4 py-3 text-left">Customer</th>
              <th className="border px-4 py-3 text-center">Amount</th>
              <th className="border px-4 py-3 text-center">Status</th>
              <th className="border px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">ORD-101</td>
              <td className="border px-4 py-2">John Doe</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
}
