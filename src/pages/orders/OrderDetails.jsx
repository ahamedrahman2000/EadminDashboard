export default function OrderDetails() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Order Details</h1>

      <div className="bg-white shadow rounded p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
 
        <div>
          <h2 className="font-medium mb-2">Products</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between">
              <span>Laptop Pro</span>
              <span>$900</span>
            </li>
            <li className="flex justify-between">
              <span>Mouse</span>
              <span>$50</span>
            </li>
          </ul>
        </div>
 
        <div>
          <h2 className="font-medium mb-2">Shipping Address</h2>
          <p className="text-sm text-gray-600">
            123 Main Street <br />
            New York, USA
          </p>
        </div>
 
        <div>
          <h2 className="font-medium mb-2">Payment Info</h2>
          <p className="text-sm text-gray-600">
            Method: Credit Card <br />
            Transaction ID: TXN-8877
          </p>
        </div>
 
        <div>
          <h2 className="font-medium mb-2">Order Status</h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">
            Delivered
          </span>
        </div>
      </div>
    </div>
  );
}
