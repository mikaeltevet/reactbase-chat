import * as React from 'react'
import './globalstyle.scss'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function App() {
  interface ProtectedRouteProps {
    children: React.ReactNode
  }

  const { currentUser } = React.useContext(AuthContext)
  
  const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    } else {
      return children
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
