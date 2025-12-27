export default function ReturnsRefunds() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Returns & Refunds
      </h1>

      <div className="bg-white shadow rounded overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-3 text-left">Order ID</th>
              <th className="border px-4 py-3 text-left">Product</th>
              <th className="border px-4 py-3 text-center">Reason</th>
              <th className="border px-4 py-3 text-center">Refund Status</th>
              <th className="border px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border px-4 py-2">ORD-099</td>
              <td className="border px-4 py-2">Running Shoes</td>
              <td className="border px-4 py-2 text-center">Size issue</td>
              <td className="border px-4 py-2 text-center">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-700 rounded">
                  Processing
                </span>
              </td>
              <td className="border px-4 py-2 text-center">
                <button className="text-blue-600">Approve</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
