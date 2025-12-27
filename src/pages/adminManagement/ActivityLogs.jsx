export default function ActivityLogs() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Activity Logs</h1>

      {/* Filters */}
      <div className="bg-white shadow rounded p-4 flex gap-4">
        <select className="border rounded px-3 py-2">
          <option>All Actions</option>
          <option>Login</option>
          <option>Create</option>
          <option>Update</option>
          <option>Delete</option>
        </select>

        <input
          type="date"
          className="border rounded px-3 py-2"
        />

        <input
          type="text"
          placeholder="Search admin..."
          className="border rounded px-3 py-2 flex-1"
        />
      </div>

      {/* Logs Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Admin</th>
              <th className="border px-4 py-2 text-left">Action</th>
              <th className="border px-4 py-2 text-left">Module</th>
              <th className="border px-4 py-2 text-center">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Admin One</td>
              <td className="border px-4 py-2">Updated Product</td>
              <td className="border px-4 py-2">Products</td>
              <td className="border px-4 py-2 text-center">2025-01-15</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Admin Two</td>
              <td className="border px-4 py-2">Logged In</td>
              <td className="border px-4 py-2">Auth</td>
              <td className="border px-4 py-2 text-center">2025-01-14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
