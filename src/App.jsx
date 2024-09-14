import React, { useContext, useEffect } from 'react'
import "./App.css"
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Context } from './context/CodeContext';

const App = () => {
  const {setCode} = useContext(Context)
  const code = new URLSearchParams(location.search).get("code")

  useEffect(() => {
    setCode(code)
  }, [code])
  
  return code ? <Dashboard code={code} /> : <Login />
}

export default App