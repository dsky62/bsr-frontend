import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import Login from "../Login";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin login */}
        <Route path="/login" element={<Login />} />

        {/* Protected admin dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
