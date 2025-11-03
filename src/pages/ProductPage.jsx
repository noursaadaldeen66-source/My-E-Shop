import React from "react";
import { useCartStore } from "../store/cartStore";

const mockProducts = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 80 },
  { id: 3, name: "Mouse", price: 45 },
];

function ProductPage() {
  const addProduct = useCartStore((state) => state.addProduct);

  return (
    <div className="space-y-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold">Products</h2>
      <div className="space-y-3">
        {mockProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center"
          >
            <div>
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-gray-600">${product.price}</p>
            </div>
            <button
              onClick={() => addProduct(product)}
              className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
