export default function RolesPermissions() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Roles & Permissions</h1>

      {/* Add Role */}
      <div className="bg-white shadow rounded p-4 space-y-4">
        <h2 className="font-medium">Create New Role</h2>

        <input
          type="text"
          placeholder="Role name"
          className="border rounded px-3 py-2 w-64"
        />

        <div className="grid grid-cols-3 gap-4">
          {[
            "Manage Products",
            "View Orders",
            "Manage Users",
            "Handle Payments",
            "View Reports",
            "Manage Settings",
          ].map((perm) => (
            <label key={perm} className="flex items-center gap-2">
              <input type="checkbox" />
              <span>{perm}</span>
            </label>
          ))}
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Role
        </button>
      </div>

      {/* Roles List */}
      <div className="bg-white shadow rounded p-4">
        <h2 className="font-medium mb-3">Existing Roles</h2>
        <ul className="space-y-2">
          <li className="flex justify-between border p-2 rounded">
            <span>Super Admin</span>
            <button className="text-blue-600">Edit</button>
          </li>
          <li className="flex justify-between border p-2 rounded">
            <span>Manager</span>
            <button className="text-blue-600">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
