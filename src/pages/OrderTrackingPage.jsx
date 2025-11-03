import React, { useState, useEffect } from "react";
import useOrderTrackingStore from "../store/orderTrackingStore";

const OrderTrackingPage = () => {
  const { orders, addOrder, updateOrderStatus, startAutoUpdate } =
    useOrderTrackingStore();
  const [orderNumber, setOrderNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [foodRequest, setFoodRequest] = useState("");

  useEffect(() => {
    startAutoUpdate();
  }, [startAutoUpdate]);

  const handleAddOrder = () => {
    if (orderNumber && customerName && foodRequest) {
      addOrder({
        orderNumber,
        customerName,
        foodRequest,
      });
      setOrderNumber("");
      setCustomerName("");
      setFoodRequest("");
    }
  };

  return (
    <div className=" text-blue-600 ">
      <h1 className="text-2xl font-bold mb-4">Order Tracking System</h1>
      <div className="mb-4  w-screen">
        <input
          type="text"
          placeholder="Order Number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Food Request"
          value={foodRequest}
          onChange={(e) => setFoodRequest(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddOrder} className="bg-blue-500 text-white p-2">
          Add Order
        </button>
      </div>
      <div>
        {orders.map((order) => (
          <div key={order.id} className="border p-4 mb-4">
            <p>
              <strong>Order Number:</strong> {order.orderNumber}
            </p>
            <p>
              <strong>Customer Name:</strong> {order.customerName}
            </p>
            <p>
              <strong>Food Request:</strong> {order.foodRequest}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <div className="mt-2">
              <button
                onClick={() => updateOrderStatus(order.id, "Preparing")}
                className="bg-yellow-500 text-white p-2 mr-2"
              >
                Preparing
              </button>
              <button
                onClick={() =>
                  updateOrderStatus(order.id, "Ready for Delivery")
                }
                className="bg-green-500 text-white p-2 mr-2"
              >
                Ready for Delivery
              </button>
              <button
                onClick={() => updateOrderStatus(order.id, "Delivered")}
                className="bg-gray-500 text-white p-2"
              >
                Delivered
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTrackingPage;
