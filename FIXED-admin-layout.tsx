"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../../../components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { Badge } from "../../../components/ui/badge"
import AdminProtectedRoute from "../../../components/auth/AdminProtectedRoute"
import { useAuth } from "../../../contexts/AuthContext"
import {
  LayoutDashboard,
  Users,
  CreditCard,
  TrendingUp,
  Settings,
  LogOut,
  Activity,
  Menu
} from "lucide-react"

const adminNavigation = [
  { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
  { name: "Gestión de Usuarios", href: "/dashboard/admin/users", icon: Users },
  { name: "Gestión de Pagos", href: "/dashboard/admin/payments", icon: CreditCard },
  { name: "Control de Membresías", href: "/dashboard/admin/memberships", icon: TrendingUp },
  { name: "Analíticas & Reportes", href: "/dashboard/admin/analytics", icon: TrendingUp },
  { name: "Registros de Actividad", href: "/dashboard/admin/logs", icon: Activity },
  { name: "Configuración", href: "/dashboard/admin/settings", icon: Settings },
]

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
  }

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex flex-col h-full ${mobile ? "w-full" : "w-64"}`}>
      {/* Logo and Title */}
      <div className="flex items-center space-x-2 p-6 border-b border-gray-700">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <span className="text-xl font-bold text-white">Earnity Admin</span>
      </div>

      {/* Admin Info */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src="https://images.pexels.com/photos/1310581/pexels-photo-1310581.jpeg?auto=compress&cs=tinysrgb&w=400" />
            <AvatarFallback className="bg-blue-100 text-blue-600">
              {user?.name.split(" ").map((n: string) => n[0]).join("") || "A"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <Badge className="text-xs bg-blue-100 text-blue-800">Administrador</Badge>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {adminNavigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
              onClick={() => mobile && setSidebarOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )

  return (
    <AdminProtectedRoute>
      <div className="min-h-screen bg-gray-900">
        {/* Desktop Sidebar */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          <div className="flex flex-col flex-grow bg-gray-800 border-r border-gray-700 overflow-y-auto">
            <Sidebar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar mobile />
          </SheetContent>
        </Sheet>

        {/* Main Content */}
        <div className="lg:pl-64">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
            </Sheet>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-white">Earnity Admin</span>
            </div>
            <div className="w-8" /> {/* Spacer */}
          </div>

          {/* Admin Page Content */}
          <main className="p-4">{children}</main>
        </div>
      </div>
    </AdminProtectedRoute>
  )
}
