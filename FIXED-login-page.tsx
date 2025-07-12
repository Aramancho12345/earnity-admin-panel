"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card'
import { useAuth } from '../../../contexts/AuthContext'
import { Eye, EyeOff, Mail, Lock, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const testUsers = [
    {
      email: 'testuser@earnity.club',
      password: 'Test@1234',
      name: 'John Doe (Premium - Pagado)',
      status: 'premium'
    },
    {
      email: 'maria@earnity.club',
      password: 'Maria@123',
      name: 'María González (Básico - Sin Pagar)',
      status: 'unpaid'
    },
    {
      email: 'carlos@earnity.club',
      password: 'Carlos@123',
      name: 'Carlos Rodríguez (Premium - Pagado)',
      status: 'premium'
    },
    {
      email: 'admin@earnity.club',
      password: 'Admin@123',
      name: 'Administrador Earnity (Admin)',
      status: 'admin'
    }
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const success = await login(email, password)
    if (success) {
      const storedUser = JSON.parse(localStorage.getItem('earnity_user') || '{}')
      if (storedUser.isAdmin) {
        router.push('/dashboard/admin')
      } else if (storedUser.hasPaid) {
        router.push('/dashboard/user')
      } else {
        router.push('/payment-required')
      }
    }
  }

  const handleTestLogin = async (testEmail: string, testPassword: string) => {
    setEmail(testEmail)
    setPassword(testPassword)
    
    const success = await login(testEmail, testPassword)
    if (success) {
      const storedUser = JSON.parse(localStorage.getItem('earnity_user') || '{}')
      if (storedUser.isAdmin) {
        router.push('/dashboard/admin')
      } else if (storedUser.hasPaid) {
        router.push('/dashboard/user')
      } else {
        router.push('/payment-required')
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Earnity</span>
            </Link>
            <Link href="/register">
              <Button variant="outline">Registrarse</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Login Form */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                🔐 Iniciar Sesión
              </CardTitle>
              <p className="text-gray-600">
                Accede a tu dashboard de ganancias
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className="pl-10 border-2 focus:border-emerald-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="pl-10 pr-10 border-2 focus:border-emerald-400"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-3 text-lg font-semibold" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Iniciando sesión...
                    </>
                  ) : (
                    '🚀 Iniciar Sesión'
                  )}
                </Button>
              </form>

              <div className="text-center">
                <Link href="/auth/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-700">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Test Users Panel */}
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-emerald-50 to-blue-50">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                🧪 Usuarios de Prueba
              </CardTitle>
              <p className="text-gray-600">
                Haz clic en cualquier usuario para probar el sistema
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {testUsers.map((user, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    user.status === 'admin'
                      ? 'bg-gradient-to-r from-blue-100 to-purple-200 border-blue-300 hover:border-blue-400'
                      : user.status === 'premium' 
                      ? 'bg-gradient-to-r from-emerald-100 to-emerald-200 border-emerald-300 hover:border-emerald-400' 
                      : 'bg-gradient-to-r from-yellow-100 to-orange-200 border-yellow-300 hover:border-yellow-400'
                  }`}
                  onClick={() => handleTestLogin(user.email, user.password)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-xs text-gray-500 mt-1">Contraseña: {user.password}</p>
                    </div>
                    <div className="text-right">
                      {user.status === 'admin' ? (
                        <div className="text-blue-600 font-semibold text-sm">
                          👑 Panel Admin
                        </div>
                      ) : user.status === 'premium' ? (
                        <div className="text-emerald-600 font-semibold text-sm">
                          ✅ Acceso Completo
                        </div>
                      ) : (
                        <div className="text-orange-600 font-semibold text-sm">
                          ⚠️ Requiere Pago
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">💡 Información:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Admin:</strong> Acceso completo al panel de administración</li>
                  <li>• <strong>Usuarios Premium:</strong> Acceso completo al dashboard</li>
                  <li>• <strong>Usuarios Sin Pagar:</strong> Redirigidos a página de pago</li>
                  <li>• <strong>Datos:</strong> Simulados para demostración</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
