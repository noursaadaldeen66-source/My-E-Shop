import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { useCartStore } from "../store/cartStore";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Read from User Store
  const { isLoggedIn, firstName } = useUserStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    firstName: state.firstName,
  }));

  // Read from Cart Store
  const totalItems = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  const activeLinkStyle = {
    textDecoration: "underline",
    color: "#1D4ED8",
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h3 className="text-2xl font-bold text-blue-600"></h3>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-gray-900 hover:text-blue-700"
              >
                Home
              </NavLink>
              <NavLink
                to="/order-tracking"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-gray-900 hover:text-blue-700"
              >
                Order Tracking
              </NavLink>
              <NavLink
                to="/user-feedback"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-gray-900 hover:text-blue-700"
              >
                User Feedback
              </NavLink>
              <NavLink
                to="/fitness-tracker"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="text-gray-900 hover:text-blue-700"
              >
                Fitness Tracker
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoggedIn ? (
                <span className="font-medium text-gray-900">
                  Welcome, {firstName}
                </span>
              ) : (
                <span className="font-medium text-gray-900">
                  Welcome, Guest
                </span>
              )}
              <div className="ml-3 relative">
                <div className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/order-tracking"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Order Tracking
            </NavLink>
            <NavLink
              to="/user-feedback"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              User Feedback
            </NavLink>
            <NavLink
              to="/fitness-tracker"
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-gray-900 hover:text-blue-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Fitness Tracker
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="ml-3">
                {isLoggedIn ? (
                  <div className="text-base font-medium leading-none text-gray-900">
                    Welcome, {firstName}
                  </div>
                ) : (
                  <div className="text-base font-medium leading-none text-gray-900">
                    Welcome, Guest
                  </div>
                )}
              </div>
              <div className="ml-auto flex-shrink-0">
                <div className="relative flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                      {totalItems}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
