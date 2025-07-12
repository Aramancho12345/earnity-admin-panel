"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export interface User {
  id: string
  name: string
  email: string
  username: string
  phone: string
  referralCode: string
  membershipLevel: string
  membershipExpiry: string
  joinDate: string
  isVerified: boolean
  hasPaid: boolean
  isAdmin?: boolean
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  refreshUser: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const mockUsers: (User & { password: string })[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'testuser@earnity.club',
    password: 'Test@1234',
    username: 'johndoe2024',
    phone: '+1 234 567 8900',
    referralCode: 'EARN2024JD',
    membershipLevel: 'Premium',
    membershipExpiry: '2024-12-31',
    joinDate: '2024-01-15',
    isVerified: true,
    hasPaid: true
  },
  {
    id: '2',
    name: 'María González',
    email: 'maria@earnity.club',
    password: 'Maria@123',
    username: 'mariag2024',
    phone: '+1 234 567 8901',
    referralCode: 'EARN2024MG',
    membershipLevel: 'Basic',
    membershipExpiry: '2024-12-31',
    joinDate: '2024-02-01',
    isVerified: true,
    hasPaid: false
  },
  {
    id: '3',
    name: 'Carlos Rodríguez',
    email: 'carlos@earnity.club',
    password: 'Carlos@123',
    username: 'carlosr2024',
    phone: '+1 234 567 8902',
    referralCode: 'EARN2024CR',
    membershipLevel: 'Premium',
    membershipExpiry: '2024-12-31',
    joinDate: '2024-01-20',
    isVerified: true,
    hasPaid: true
  },
  {
    id: 'admin',
    name: 'Administrador Earnity',
    email: 'admin@earnity.club',
    password: 'Admin@123',
    username: 'adminEarnity',
    phone: '+1 234 567 8903',
    referralCode: 'EARNITYADMIN',
    membershipLevel: 'Admin',
    membershipExpiry: '2099-12-31',
    joinDate: '2024-01-01',
    isVerified: true,
    hasPaid: true,
    isAdmin: true
  }
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const savedUser = localStorage.getItem('earnity_user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
      } catch {
        localStorage.removeItem('earnity_user')
        setUser(null)
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const foundUser = mockUsers.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password)
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        localStorage.setItem('earnity_user', JSON.stringify(userWithoutPassword))
        if (!foundUser.hasPaid) {
          toast.info('Debes completar el pago de membresía para acceder al dashboard')
        } else {
          toast.success(`¡Bienvenido ${foundUser.name}!`)
        }
        return true
      } else {
        toast.error('Credenciales inválidas')
        return false
      }
    } catch {
      toast.error('Error al iniciar sesión')
      return false
    } finally {
      setIsLoading(false)
    }
  }

  const refreshUser = () => {
    const savedUser = localStorage.getItem('earnity_user')
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser)
        setUser(userData)
      } catch {
        localStorage.removeItem('earnity_user')
        setUser(null)
      }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('earnity_user')
    router.push('/auth/login')
    toast.success('Sesión cerrada exitosamente')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, refreshUser, isLoading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
