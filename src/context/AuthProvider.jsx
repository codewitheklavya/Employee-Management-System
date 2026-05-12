import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({employees: [],admin: {}})

  useEffect(()=>{

    const data = getLocalStorage()

    if (data) {
      setUserData({employees: data.employees || [],admin: data.admin || {}})
    }
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider