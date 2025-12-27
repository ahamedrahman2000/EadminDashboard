import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectRoute";
import Dashboard from "./component/Dashboard";
import LoginUI from "./component/LoginUI";
import NotFound from "./component/NotFound";
import AuthLogic from "./logics/AuthLogic";

export default function App() {
  return (
    <AuthLogic>
      <Routes>
        <Route path="/" element={<LoginUI />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthLogic>
  );
}
