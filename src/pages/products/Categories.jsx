import { products } from "../../data/products";

export default function Categories() {
  return (
    <>
    <div className="text-right px-4 py-4">
        <button className="bg-blue-400 rounded px-4 py-2 text-white font-medium">Add Category</button>
    </div>
      <table className="w-full border border-gray-300">
        <thead className="sticky top-0 bg-gray-100 z-10">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th> 
            <th className="border p-2">No of Products</th> 
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

              <td className="flex gap-2  border p-2">
                <button className="bg-red-500 px-2 py-1 ml-3 text-white rounded">
                  Delete
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
