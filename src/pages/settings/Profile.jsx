export default function Profile() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Profile</h1>

      <form className="bg-white shadow rounded p-6 space-y-4 max-w-lg">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            placeholder="+1 234 567 890"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Profile
        </button>
      </form>
    </div>
  );
}
