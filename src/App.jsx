import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import ProtectedRoute from './components/Auth/ProtectedRoute'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const { user } = useContext(AuthContext)

  return (
    <Routes>
      {/* Login Route */}
      <Route
        path="/login"
        element={
          user
            ? <Navigate to={user === 'admin' ? '/admin/dashboard' : '/employee/dashboard'} replace />
            : <Login />
        }
      />

      {/* Admin Dashboard */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Employee Dashboard */}
      <Route
        path="/employee/dashboard"
        element={
          <ProtectedRoute allowedRole="employee">
            <EmployeeDashboard />
          </ProtectedRoute>
        }
      />

      {/* Catch-all redirect */}
      <Route
        path="*"
        element={
          user
            ? <Navigate to={user === 'admin' ? '/admin/dashboard' : '/employee/dashboard'} replace />
            : <Navigate to="/login" replace />
        }
      />
    </Routes>
  )
}

export default App