export default function AllCustomers() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">All Customers</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <select className="border px-4 py-2 rounded">
          <option>All Status</option>
          <option>Active</option>
          <option>Blocked</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or email"
          className="border px-4 py-2 rounded w-64"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Name</th>
              <th className="border px-4 py-3 text-left">Email</th>
              <th className="border px-4 py-3 text-left">Phone</th>
              <th className="border px-4 py-3 text-center">Orders</th>
              <th className="border px-4 py-3 text-center">Status</th>
              <th className="border px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">john@email.com</td>
              <td className="border px-4 py-2">+1 234 567 890</td>
              <td className="border px-4 py-2 text-center">12</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Active
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-red-600">Block</button>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">jane@email.com</td>
              <td className="border px-4 py-2">+44 987 654 321</td>
              <td className="border px-4 py-2 text-center">3</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                  Blocked
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-green-600">Unblock</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
