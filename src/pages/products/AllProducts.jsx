import { products } from "../../data/products";

export default function AllProducts() {
  return (
    <>
      <table className="w-full border border-gray-300">
        <thead className="sticky top-0 bg-gray-100 z-10">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Ratings</th>
            <th className="border p-2">Inventory</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.id}</td>
              <td className="border p-2">{p.title}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">$ {p.price}</td>
              <td className="border p-2">{p.description}</td>
              <td className="border p-2">{p.rating}</td>
              <td className="border p-2">{p.reviews}</td>

              <td className="flex gap-2  border p-2">
                <button className="bg-red-500 px-2 py-1 ml-3 text-white rounded">
                  Delete
                </button>
                <button className="bg-gray-200 px-4 py-1 rounded">Edit</button>
                <button className="bg-gray-200 px-4 py-1 rounded">
                  <span>
                    <i class="fa-solid fa-eye"></i>
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
