import * as React from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

interface AuthContextProviderProps {
  children: React.ReactNode
}

interface CurrentUser {
  email: string
  uid: string
}

export const AuthContext = React.createContext({})
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<CurrentUser | null>(null)
  
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      console.log(user)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
