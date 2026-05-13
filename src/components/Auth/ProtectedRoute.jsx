import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

const ProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (allowedRole && user !== allowedRole) {
    // Wrong role, redirect to their correct dashboard
    return <Navigate to={user === 'admin' ? '/admin/dashboard' : '/employee/dashboard'} replace />
  }

  return children
}

export default ProtectedRoute
