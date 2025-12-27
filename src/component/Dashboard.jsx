import { useState } from "react";
import SideBar from "./SideBar";
import Home from "./Home";
import Header from "./Header"; //
import AllProducts from "../pages/products/AllProducts";
import AddProducts from "../pages/products/AddProducts";
import Categories from "../pages/products/Categories";
import Attributes from "../pages/products/Attributes";
import Inventory from "../pages/products/Inventory";
import AllOrders from "../pages/orders/AllOrders";
import OrderDetails from "../pages/orders/OrderDetails";
import ReturnsRefunds from "../pages/orders/ReturnAndRefund";
import AllCustomers from "../pages/customers/AllCustomers";
import CustomerDetails from "../pages/customers/CustomerDetails";
import CustomerSupport from "../pages/customers/CustomerSupport";
import PaymentMethods from "../pages/payments/PaymentMethods";
import Transactions from "../pages/payments/Transactions";
import Invoices from "../pages/payments/Invoices";
import AdminUsers from "../pages/adminManagement/AdminUsers";
import RolesPermissions from "../pages/adminManagement/RolesAndPermission";
import ActivityLogs from "../pages/adminManagement/ActivityLogs";
import Profile from "../pages/settings/Profile";
import Language from "../pages/settings/Language";
import StoreInfo from "../pages/settings/StoreInfo";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex">
      <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1">
        <Header />

        {activeTab === "home" && <Home />}

        {activeTab === "all-products" && <AllProducts />}
        {activeTab === "add-product" && <AddProducts />}
        {activeTab === "categories" && <Categories />}
        {activeTab === "attributes" && <Attributes />}
        {activeTab === "inventory" && <Inventory />}
        {activeTab === "all-orders" && <AllOrders />}
        {activeTab === "order-details" && <OrderDetails />}
        {activeTab === "return-refund" && <ReturnsRefunds />}
        {activeTab === "all-customers" && <AllCustomers />}
        {activeTab === "customer-details" && <CustomerDetails />}
        {activeTab === "customer-support" && <CustomerSupport />}
        {activeTab === "transactions" && <Transactions />}
        {activeTab === "payment-methods" && <PaymentMethods />}
        {activeTab === "invoices" && <Invoices />}
        {activeTab === "admin-users" && <AdminUsers />}
        {activeTab === "roles-permissions" && <RolesPermissions />}
        {activeTab === "activity-logs" && <ActivityLogs />}
        {activeTab === "profile" && <Profile />}
        {activeTab === "language" && <Language />}
        {activeTab === "store-info" && <StoreInfo/>}
      </main>
    </div>
  );
}
