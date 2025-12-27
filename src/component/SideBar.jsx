import { useState } from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const [openMenu, setOpenMenu] = useState(null);

  const btnClass = (name) =>
    `w-full text-left px-4 py-2 text-white rounded ${
      activeTab === name ? "bg-gray-700" : "hover:bg-gray-600"
    }`;

  return (
    <aside className="bg-gray-900 w-64 min-h-screen p-4">
      <h1 className="text-white text-2xl text-center mb-6">
        Cartly Admin
      </h1>

      <div className="flex flex-col space-y-2">
 
        <button
          onClick={() => setActiveTab("home")}
          className={btnClass("home")}
        >
          Home
        </button>

      
        <button
          onMouseOver={() =>
            setOpenMenu(openMenu === "products" ? null : "products")
          }
          className={btnClass("products")}
        >
          Products
        </button>

        {openMenu === "products" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("all-products")} className={btnClass("all-products")}>All Products</button>
            <button onClick={() => setActiveTab("add-product")} className={btnClass("add-product")}>Add Product</button>
            <button onClick={() => setActiveTab("categories")} className={btnClass("categories")}>Categories</button>
            <button onClick={() => setActiveTab("attributes")} className={btnClass("attributes")}>Attributes</button>
            <button onClick={() => setActiveTab("inventory")} className={btnClass("inventory")}>Inventory</button>
          </div>
        )}
 
        <button
          onClick={() =>
            setOpenMenu(openMenu === "orders" ? null : "orders")
          }
          className={btnClass("orders")}
        >
          Orders
        </button>

        {openMenu === "orders" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("all-orders")} className={btnClass("all-orders")}>All Orders</button>
            <button onClick={() => setActiveTab("order-details")} className={btnClass("order-details")}>Order Details</button>
            <button onClick={() => setActiveTab("return-refund")} className={btnClass("return-refund")}>Returns & Refunds</button> 
          </div>
        )}
 
        <button
          onClick={() =>
            setOpenMenu(openMenu === "customers" ? null : "customers")
          }
          className={btnClass("customers")}
        >
          Customers
        </button>

        {openMenu === "customers" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("all-customers")} className={btnClass("all-customers")}>All Customers</button>
            <button onClick={() => setActiveTab("customer-details")} className={btnClass("customer-details")}>Customer Details</button>
            <button onClick={() => setActiveTab("customer-support")} className={btnClass("customer-support")}>Customer Support</button>
          </div>
        )}

    
        <button
          onClick={() =>
            setOpenMenu(openMenu === "payments" ? null : "payments")
          }
          className={btnClass("payments")}
        >
          Payments
        </button>

        {openMenu === "payments" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("transactions")} className={btnClass("transactions")}>Transactions</button>
            <button onClick={() => setActiveTab("payment-methods")} className={btnClass("payment-methods")}>Payment Methods</button>
            <button onClick={() => setActiveTab("invoices")} className={btnClass("invoices")}>Invoices</button>
          </div>
        )}
    
        <button
          onClick={() =>
            setOpenMenu(openMenu === "admin" ? null : "admin")
          }
          className={btnClass("admin")}
        >
          Admin Management
        </button>

        {openMenu === "admin" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("admin-users")} className={btnClass("admin-users")}>Users</button>
            <button onClick={() => setActiveTab("roles-permissions")} className={btnClass("roles-permissions")}>Roles & Permission</button>
            <button onClick={() => setActiveTab("activity-logs")} className={btnClass("activity-logs")}>Activity Logs</button>
          </div>
        )}

      
        <button
          onClick={() =>
            setOpenMenu(openMenu === "settings" ? null : "settings")
          }
          className={btnClass("settings")}
        >
          Settings
        </button>

        {openMenu === "settings" && (
          <div className="ml-4 space-y-1">
            <button onClick={() => setActiveTab("profile")} className={btnClass("profile")}>Profile</button>
            <button onClick={() => setActiveTab("language")} className={btnClass("Language")}>Language</button>
            <button onClick={() => setActiveTab("store-info")} className={btnClass("store-info")}>Store Info</button>
            
          </div>
        )}

      </div>
    </aside>
  );
}
