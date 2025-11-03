import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import LoginPage from "@/pages/LoginPage.jsx";
import ProductPage from "@/pages/ProductPage.jsx";
import CartPage from "@/pages/CartPage.jsx";
import OrderTrackingPage from "@/pages/OrderTrackingPage.jsx";
import UserFeedbackPage from "@/pages/UserFeedbackPage.jsx";
import FitnessTrackerPage from "@/pages/FitnessTrackerPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-50  w-screen">
        <div className="fixed top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
        <div className="pt-16">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <LoginPage />
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <ProductPage />
                    </div>
                    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <CartPage />
                    </div>
                  </div>
                }
              />
              <Route
                path="/order-tracking"
                element={
                  <div className="py-4">
                    <OrderTrackingPage />
                  </div>
                }
              />
              <Route
                path="/user-feedback"
                element={
                  <div className="py-4">
                    <UserFeedbackPage />
                  </div>
                }
              />
              <Route
                path="/fitness-tracker"
                element={
                  <div className="py-4">
                    <FitnessTrackerPage />
                  </div>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
