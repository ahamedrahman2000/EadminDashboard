export default function CustomerSupport() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Customer Support</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500 text-sm">Open Tickets</p>
          <p className="text-2xl font-bold">18</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500 text-sm">Pending</p>
          <p className="text-2xl font-bold">7</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500 text-sm">Resolved</p>
          <p className="text-2xl font-bold">42</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500 text-sm">Avg Response Time</p>
          <p className="text-2xl font-bold">2h</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded p-4 flex gap-4">
        <select className="border rounded px-3 py-2">
          <option>All Status</option>
          <option>Open</option>
          <option>Pending</option>
          <option>Resolved</option>
        </select>

        <select className="border rounded px-3 py-2">
          <option>All Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="text"
          placeholder="Search tickets..."
          className="border rounded px-3 py-2 flex-1"
        />
      </div>

      {/* Tickets Table */}
      <div className="bg-white shadow rounded p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Ticket ID</th>
              <th className="border px-4 py-2 text-left">Customer</th>
              <th className="border px-4 py-2 text-left">Subject</th>
              <th className="border px-4 py-2 text-center">Priority</th>
              <th className="border px-4 py-2 text-center">Status</th>
              <th className="border px-4 py-2 text-center">Last Update</th>
              <th className="border px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">#SUP001</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Order not delivered</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-red-100 text-red-700 rounded">
                  High
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  Pending
                </span>
              </td>
              <td className="border px-4 py-2 text-center">2 hrs ago</td>
              <td className="border px-4 py-2 text-center">
                <button className="text-blue-600">View</button>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">#SUP002</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">Refund request</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  Medium
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Resolved
                </span>
              </td>
              <td className="border px-4 py-2 text-center">1 day ago</td>
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
