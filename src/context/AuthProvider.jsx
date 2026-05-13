import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, updateEmployeeInStorage, saveEmployeesToStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({ employees: [], admin: {} })
  const [user, setUser] = useState(null) // 'admin' | 'employee' | null
  const [loggedInUserData, setLoggedInUserData] = useState(null)

  // Load data from localStorage on mount
  useEffect(() => {
    const data = getLocalStorage()
    if (data) {
      setUserData({ employees: data.employees || [], admin: data.admin || {} })
    }

    // Restore session
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (loggedInUser) {
      setUser(loggedInUser.role)
      // Refresh from localStorage to get latest data
      if (loggedInUser.role === 'employee' && data.employees) {
        const freshEmployee = data.employees.find(e => e.id === loggedInUser.data?.id)
        setLoggedInUserData(freshEmployee || loggedInUser.data)
      } else {
        setLoggedInUserData(loggedInUser.data)
      }
    }
  }, [])

  // Login handler
  const login = (email, password) => {
    // Admin login
    if (email === 'admin@example.com' && password === '123') {
      const adminData = userData.admin
      setUser('admin')
      setLoggedInUserData(adminData)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminData }))
      return { success: true, role: 'admin' }
    }

    // Employee login
    const employee = userData.employees?.find(
      (e) => e.email === email && e.password === password
    )
    if (employee) {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
      return { success: true, role: 'employee' }
    }

    return { success: false }
  }

  // Logout handler
  const logout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }

  // Create a task and assign to an employee
  const createTask = (taskData, employeeName) => {
    const updatedEmployees = userData.employees.map(emp => {
      if (emp.firstName.toLowerCase() === employeeName.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: taskData.title,
            taskDescription: taskData.description,
            taskDate: taskData.date,
            category: taskData.category
          }]
        }
      }
      return emp
    })

    setUserData(prev => ({ ...prev, employees: updatedEmployees }))
    saveEmployeesToStorage(updatedEmployees)
    return true
  }

  // Update a task status for the logged-in employee
  const updateTaskStatus = (taskIndex, newStatus) => {
    if (!loggedInUserData) return

    const updatedTasks = loggedInUserData.tasks.map((task, idx) => {
      if (idx === taskIndex) {
        return {
          ...task,
          active: newStatus === 'active',
          newTask: newStatus === 'newTask',
          completed: newStatus === 'completed',
          failed: newStatus === 'failed'
        }
      }
      return task
    })

    const updatedEmployee = { ...loggedInUserData, tasks: updatedTasks }
    setLoggedInUserData(updatedEmployee)

    // Update in the full employees array
    const updatedEmployees = userData.employees.map(emp =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    )
    setUserData(prev => ({ ...prev, employees: updatedEmployees }))
    updateEmployeeInStorage(updatedEmployee)

    // Update loggedInUser in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
  }

  const contextValue = {
    userData,
    setUserData,
    user,
    loggedInUserData,
    login,
    logout,
    createTask,
    updateTaskStatus
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider