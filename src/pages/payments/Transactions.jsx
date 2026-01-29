export default function Transactions() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Transactions</h1>
 
      <div className="bg-white shadow rounded p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search Payment ID..."
          className="border rounded px-3 py-2 w-64"
        />

        <select className="border rounded px-3 py-2">
          <option>All Methods</option>
          <option>Card</option>
          <option>UPI</option>
          <option>Wallet</option>
        </select>

        <select className="border rounded px-3 py-2">
          <option>All Status</option>
          <option>Success</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>

        <input type="date" className="border rounded px-3 py-2" />
      </div>
 
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Payment ID</th>
              <th className="border px-4 py-2 text-left">Customer</th>
              <th className="border px-4 py-2 text-center">Method</th>
              <th className="border px-4 py-2 text-center">Amount</th>
              <th className="border px-4 py-2 text-center">Status</th>
              <th className="border px-4 py-2 text-center">Date</th>
              <th className="border px-4 py-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">#PAY123</td>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2 text-center">Card</td>
              <td className="border px-4 py-2 text-center">$120</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">
                  Success
                </span>
              </td>
              <td className="border px-4 py-2 text-center">2025-01-10</td>
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
