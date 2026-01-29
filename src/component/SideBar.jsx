import { useState } from "react";

export default function Sidebar({ activeTab, setActiveTab, isOpen, setOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  const menuBtn = () => {
    setOpen((prev) => !prev);
    if (isOpen) setOpenMenu(null);
  };

  const btnClass = (name) =>
    `w-full flex items-center gap-3 text-left px-4 py-2 text-white rounded transition
     ${activeTab === name ? "bg-gray-700" : "hover:bg-gray-600"}`;

  const subBtnClass = (name) =>
    `w-full text-left px-3 py-1.5 text-sm rounded transition
     ${
       activeTab === name
         ? "bg-gray-700 text-white"
         : "text-gray-300 hover:bg-gray-700 hover:text-white"
     }`;

  return (
    <aside
      className={`fixed top-0 left-0 bg-gray-800 min-h-screen   transition-all duration-300
      ${isOpen ? "w-64" : "w-16"}`}
    >
      <div className="flex justify-between items-center p-4 mb-4">
        {isOpen && (
          <h1 className="text-white text-xl font-semibold whitespace-nowrap">
            Cartly Admin
          </h1>
        )}
        <button
          onClick={menuBtn}
          className="text-xl text-white hover:text-gray-300"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className="flex flex-col space-y-3">
        <button
          onClick={() => setActiveTab("home")}
          className={btnClass("home")}
        >
          <i className="fa-solid fa-home"></i>
          {isOpen && "Home"}
        </button>

        <button
          onClick={() =>
            setOpenMenu(openMenu === "products" ? null : "products")
          }
          className={btnClass("products")}
        >
          <i className="fa-solid fa-box"></i>
          {isOpen && "Products"}
        </button>

        {openMenu === "products" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("all-products")}
              className={subBtnClass("all-products")}
            >
              • All Products
            </button>
            <button
              onClick={() => setActiveTab("add-product")}
              className={subBtnClass("add-product")}
            >
              • Add Product
            </button>
            <button
              onClick={() => setActiveTab("categories")}
              className={subBtnClass("categories")}
            >
              • Categories
            </button>
            <button
              onClick={() => setActiveTab("attributes")}
              className={subBtnClass("attributes")}
            >
              • Attributes
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={subBtnClass("inventory")}
            >
              • Inventory
            </button>
          </div>
        )}

        <button
          onClick={() => setOpenMenu(openMenu === "orders" ? null : "orders")}
          className={btnClass("orders")}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          {isOpen && "Orders"}
        </button>

        {openMenu === "orders" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("all-orders")}
              className={subBtnClass("all-orders")}
            >
              • All Orders
            </button>
            <button
              onClick={() => setActiveTab("order-details")}
              className={subBtnClass("order-details")}
            >
              • Order Details
            </button>
            <button
              onClick={() => setActiveTab("return-refund")}
              className={subBtnClass("return-refund")}
            >
              • Returns & Refunds
            </button>
          </div>
        )}

        <button
          onClick={() =>
            setOpenMenu(openMenu === "customers" ? null : "customers")
          }
          className={btnClass("customers")}
        >
          <i className="fa-solid fa-users"></i>
          {isOpen && "Customers"}
        </button>

        {openMenu === "customers" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("all-customers")}
              className={subBtnClass("all-customers")}
            >
              • All Customers
            </button>
            <button
              onClick={() => setActiveTab("customer-details")}
              className={subBtnClass("customer-details")}
            >
              • Customer Details
            </button>
            <button
              onClick={() => setActiveTab("customer-support")}
              className={subBtnClass("customer-support")}
            >
              • Customer Support
            </button>
          </div>
        )}

        <button
          onClick={() =>
            setOpenMenu(openMenu === "payments" ? null : "payments")
          }
          className={btnClass("payments")}
        >
          <i className="fa-solid fa-credit-card"></i>
          {isOpen && "Payments"}
        </button>

        {openMenu === "payments" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("transactions")}
              className={subBtnClass("transactions")}
            >
              • Transactions
            </button>
            <button
              onClick={() => setActiveTab("payment-methods")}
              className={subBtnClass("payment-methods")}
            >
              • Payment Methods
            </button>
            <button
              onClick={() => setActiveTab("invoices")}
              className={subBtnClass("invoices")}
            >
              • Invoices
            </button>
          </div>
        )}

        <button
          onClick={() => setOpenMenu(openMenu === "admin" ? null : "admin")}
          className={btnClass("admin")}
        >
          <i className="fa-solid fa-user-shield"></i>
          {isOpen && "Admin Management"}
        </button>

        {openMenu === "admin" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("admin-users")}
              className={subBtnClass("admin-users")}
            >
              • Users
            </button>
            <button
              onClick={() => setActiveTab("roles-permissions")}
              className={subBtnClass("roles-permissions")}
            >
              • Roles & Permissions
            </button>
            <button
              onClick={() => setActiveTab("activity-logs")}
              className={subBtnClass("activity-logs")}
            >
              • Activity Logs
            </button>
          </div>
        )}

        <button
          onClick={() =>
            setOpenMenu(openMenu === "settings" ? null : "settings")
          }
          className={btnClass("settings")}
        >
          <i className="fa-solid fa-gear"></i>
          {isOpen && "Settings"}
        </button>

        {openMenu === "settings" && isOpen && (
          <div className="ml-8 border-l border-gray-700 pl-3 space-y-1">
            <button
              onClick={() => setActiveTab("profile")}
              className={subBtnClass("profile")}
            >
              • Profile
            </button>
            <button
              onClick={() => setActiveTab("language")}
              className={subBtnClass("language")}
            >
              • Language
            </button>
            <button
              onClick={() => setActiveTab("store-info")}
              className={subBtnClass("store-info")}
            >
              • Store Info
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
