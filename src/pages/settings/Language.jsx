export default function Language() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Language Settings</h1>

      <div className="bg-white shadow rounded p-6 max-w-md space-y-4">
        <label className="block text-gray-700">Select Default Language</label>
        <select className="border px-3 py-2 rounded w-full">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Chinese</option>
        </select>

        <label className="block text-gray-700">Select Secondary Language</label>
        <select className="border px-3 py-2 rounded w-full">
          <option>None</option>
          <option>Spanish</option>
          <option>French</option>
          <option>German</option>
          <option>Chinese</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Settings
        </button>
      </div>
    </div>
  );
}
