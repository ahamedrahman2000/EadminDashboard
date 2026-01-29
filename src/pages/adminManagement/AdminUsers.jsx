export default function AdminUsers() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Admin Users</h1>
 
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Search admin..."
          className="border rounded px-3 py-2 w-64"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Admin
        </button>
      </div>
 
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-center">Role</th>
              <th className="border px-4 py-2 text-center">Status</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Admin One</td>
              <td className="border px-4 py-2">admin@site.com</td>
              <td className="border px-4 py-2 text-center">Super Admin</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Active
                </span>
              </td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button className="text-blue-600">Edit</button>
                <button className="text-red-600">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
