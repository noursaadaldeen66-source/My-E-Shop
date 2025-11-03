import React from "react";
import { useCartStore } from "../store/cartStore";

function CartPage() {
  const { cart, removeProduct, clearCart } = useCartStore((state) => ({
    cart: state.cart,
    removeProduct: state.removeProduct,
    clearCart: state.clearCart,
  }));

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="space-y-4 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl font-semibold">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-md hover:bg-gray-50"
            >
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="ml-2 text-sm text-gray-600">
                  (Qty: {item.quantity})
                </span>
              </div>
              <button
                onClick={() => removeProduct(item.id)}
                className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
          <hr className="my-4" />
          <div className="text-right">
            <h3 className="text-lg font-bold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
          <button
            onClick={clearCart}
            className="w-full mt-4 px-4 py-2 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-800"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
