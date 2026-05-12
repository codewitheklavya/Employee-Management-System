import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)

 
  const authData = useContext(AuthContext)

  // Check localStorage on refresh
  useEffect(() => {

    const loggedInUser = JSON.parse(
      localStorage.getItem('loggedInUser')
    )

    if (loggedInUser) {

      setUser(loggedInUser.role)
      setLoggedInUserData(loggedInUser.data)

    }

  }, [])




  const handleLogin = (email, password) => {

  // Admin Login
  if (
    email === 'admin@example.com' &&
    password === '123'
  ) {

    const adminData = authData?.admin

    setUser('admin')
    setLoggedInUserData(adminData)

    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        role: 'admin',
        data: adminData
      })
    )

  }

  // Employee Login
  else {

    const employee = authData?.employees?.find(
      (e) =>
        e.email === email &&
        e.password === password
    )

    if (employee) {

      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({
          role: 'employee',
          data: employee
        })
      )

    } else {

      alert('Invalid Credentials')

    }
  }
}


  return (
    <>

      
      {!user && (
        <Login handleLogin={handleLogin} />
      )}

      {user === 'admin' && (
        <AdminDashboard data={loggedInUserData} />
      )}

      {user === 'employee' && (
        <EmployeeDashboard data={loggedInUserData} />
      )}

    </>
  )
}

export default App