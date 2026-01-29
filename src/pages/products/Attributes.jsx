import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function Attributes() {
  const { productList, setProductList } = useContext(ProductContext);

  const allSizes = productList.flatMap((p) => p.sizes || []);
  const uniqueSizes = [...new Set(allSizes)];

  const allColors = productList.flatMap((p) => p.colors || []);
  const uniqueColors = [...new Set(allColors)];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Product Attributes</h1>

      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Size</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Add Value
            </button>
          </div>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Value</th>
                <th className="border px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {uniqueSizes.map((size, index) => (
                <tr key={index}>
                  <td className="border p-2">{size}</td>

                  <td className="border p-2">
                    <div className="flex gap-2 justify-center">
                      <button className="bg-red-500 px-2 py-1 text-white rounded">
                        Delete
                      </button>

                      <button className="bg-gray-200 px-4 py-1 rounded">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow rounded-lg p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Colors</h2>
            <button className="text-sm text-blue-600 hover:underline">
              Add Value
            </button>
          </div>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left">Value</th>
                <th className="border px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {uniqueColors.map((colors, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: colors }}
                    ></div>
                  </td>

                  <td className="border p-2">
                    <div className="flex gap-2 justify-center">
                      <button className="bg-red-500 px-2 py-1 text-white rounded">
                        Delete
                      </button>

                      <button className="bg-gray-200 px-4 py-1 rounded">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
