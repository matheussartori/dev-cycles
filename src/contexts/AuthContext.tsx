import { createContext, useState, ReactNode, useEffect } from 'react'
import { githubApi } from '../services/api'

interface User {
  id: number
  avatar_url: string
  name: string
}

interface AuthContextData {
  user: User
  signIn: (username: string) => Promise<void>
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>()

  useEffect(() => {
    const storageUser = localStorage.getItem('@move-it/user')

    if (storageUser) {
      setUser(JSON.parse(storageUser))
    }
  }, [user])

  async function signIn (username: string) {
    try {
      const { data } = await githubApi.get(`users/${username}`)

      const userInfo = {
        id: data.id,
        name: data.name,
        avatar_url: data.avatar_url
      }

      setUser(userInfo)

      localStorage.setItem('@move-it/user', JSON.stringify(userInfo))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      signIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}