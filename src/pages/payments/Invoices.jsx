export default function Invoices() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Invoices</h1>

      {/* Filters */}
      <div className="bg-white shadow rounded p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search Invoice ID..."
          className="border rounded px-3 py-2 w-64"
        />
        <input type="date" className="border rounded px-3 py-2" />
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Invoice ID</th>
              <th className="border px-4 py-2 text-left">Customer</th>
              <th className="border px-4 py-2 text-center">Amount</th>
              <th className="border px-4 py-2 text-center">Date</th>
              <th className="border px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">#INV001</td>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2 text-center">$250</td>
              <td className="border px-4 py-2 text-center">2025-01-12</td>
              <td className="border px-4 py-2 text-center space-x-2">
                <button className="text-blue-600">View</button>
                <button className="text-green-600">Download</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
