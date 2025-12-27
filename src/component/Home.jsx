import { products } from "../data/products";
import SalesChart from "./SalesChart";

export default function Home() {
  return (
    <>
      <section className="px-6 py-5 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Quick Overview</h1>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="shadow-md p-4 flex justify-between items-center bg-white rounded-lg">
            <div>
              <p className="text-xl font-medium">Total Orders</p>
              <p className="text-gray-700 font-semibold">$84,000</p>
            </div>
            <span className="text-5xl text-blue-500">
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>

          <div className="shadow-md p-4 flex justify-between items-center bg-white rounded-lg">
            <div>
              <p className="text-xl font-medium">Pending Orders</p>
              <p className="text-gray-700 font-semibold">$24,000</p>
            </div>
            <span className="text-5xl text-yellow-500">
              <i className="fa-solid fa-hourglass-half"></i>
            </span>
          </div>

          <div className="shadow-md p-4 flex justify-between items-center bg-white rounded-lg">
            <div>
              <p className="text-xl font-medium">Online Orders</p>
              <p className="text-gray-700 font-semibold">740</p>
            </div>
            <span className="text-5xl text-green-500">
              <i className="fa-solid fa-globe"></i>
            </span>
          </div>

          <div className="shadow-md p-4 flex justify-between items-center bg-white rounded-lg">
            <div>
              <p className="text-xl font-medium">Return Orders</p>
              <p className="text-gray-700 font-semibold">8400</p>
            </div>
            <span className="text-5xl text-red-500">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </span>
          </div>

          <div className="shadow-md p-4 flex justify-between items-center bg-white rounded-lg">
            <div>
              <p className="text-xl font-medium">Total Customers</p>
              <p className="text-gray-700 font-semibold">1,200</p>
            </div>
            <span className="text-5xl text-purple-500">
              <i className="fa-solid fa-users"></i>
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="shadow-md rounded bg-white p-4 h-[500px] flex flex-col">
            <h1 className="text-xl font-semibold mb-3">Our Products</h1>

            <div className="flex-1 overflow-auto">
              <table className="w-full border border-gray-300">
                <thead className="sticky top-0 bg-gray-100 z-10">
                  <tr>
                    <th className="border p-2">ID</th>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Price</th>
                    <th className="border p-2">Stock</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="text-center hover:bg-gray-50">
                      <td className="border p-2">{p.id}</td>
                      <td className="border p-2">{p.title}</td>
                      <td className="border p-2">{p.category}</td>
                      <td className="border p-2">$ {p.price}</td>
                      <td className="border p-2">
                        {p.stock > 50 ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                            In Stock
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                            Low Stock
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <SalesChart />
        </div>
      </section>

      <section className="px-6 py-5">
        <h1 className="text-xl font-semibold mb-4">Quick Actions</h1>

        <div className="grid md:grid-cols-4 gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Add Product
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Add Category
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
            View Orders
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            View Customers
          </button>
        </div>
      </section>
    </>
  );
}
