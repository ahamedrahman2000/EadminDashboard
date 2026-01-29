export default function PaymentMethods() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Payment Methods</h1>
 
      <div className="bg-white shadow rounded p-4 space-y-4">
        <h2 className="font-medium">Add Payment Method</h2>

        <select className="border rounded px-3 py-2 w-64">
          <option>Select Method</option>
          <option>Card</option>
          <option>UPI</option>
          <option>Wallet</option>
        </select>

        <input
          type="text"
          placeholder="Provider name"
          className="border rounded px-3 py-2 w-64"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Method
        </button>
      </div>
 
      <div className="bg-white shadow rounded p-4">
        <h2 className="font-medium mb-3">Available Methods</h2>

        <ul className="space-y-2">
          <li className="flex justify-between border p-2 rounded">
            <span>Credit Card</span>
            <span className="text-green-600">Active</span>
          </li>
          <li className="flex justify-between border p-2 rounded">
            <span>UPI</span>
            <span className="text-green-600">Active</span>
          </li>
          <li className="flex justify-between border p-2 rounded">
            <span>Wallet</span>
            <span className="text-gray-500">Disabled</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
