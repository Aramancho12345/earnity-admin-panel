"use client"

export default function AdminHomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-white mb-2">
          👑 Panel de Administración
        </h1>
        <p className="text-gray-300">
          Bienvenido al panel de control de Earnity. Desde aquí puedes gestionar todos los aspectos de la plataforma.
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Usuarios Registrados</p>
              <p className="text-3xl font-bold text-white">1,234</p>
            </div>
            <div className="bg-blue-600 rounded-lg p-3">
              <span className="text-white text-xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Pagos Completados</p>
              <p className="text-3xl font-bold text-white">567</p>
            </div>
            <div className="bg-green-600 rounded-lg p-3">
              <span className="text-white text-xl">💳</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Membresías Activas</p>
              <p className="text-3xl font-bold text-white">890</p>
            </div>
            <div className="bg-purple-600 rounded-lg p-3">
              <span className="text-white text-xl">⭐</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Ingresos Totales</p>
              <p className="text-3xl font-bold text-white">$45,678</p>
            </div>
            <div className="bg-yellow-600 rounded-lg p-3">
              <span className="text-white text-xl">💰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg transition-colors">
            <div className="text-center">
              <span className="text-2xl mb-2 block">👥</span>
              <span className="font-medium">Gestionar Usuarios</span>
            </div>
          </button>
          
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg transition-colors">
            <div className="text-center">
              <span className="text-2xl mb-2 block">💳</span>
              <span className="font-medium">Ver Pagos</span>
            </div>
          </button>
          
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg transition-colors">
            <div className="text-center">
              <span className="text-2xl mb-2 block">📊</span>
              <span className="font-medium">Analíticas</span>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-xl font-bold text-white mb-4">Actividad Reciente</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 rounded-full p-2">
                <span className="text-white text-sm">✓</span>
              </div>
              <div>
                <p className="text-white font-medium">Nuevo usuario registrado</p>
                <p className="text-gray-400 text-sm">john.doe@example.com</p>
              </div>
            </div>
            <span className="text-gray-400 text-sm">Hace 5 min</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-full p-2">
                <span className="text-white text-sm">💳</span>
              </div>
              <div>
                <p className="text-white font-medium">Pago completado</p>
                <p className="text-gray-400 text-sm">$249 - Plan Estándar</p>
              </div>
            </div>
            <span className="text-gray-400 text-sm">Hace 12 min</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-600 rounded-full p-2">
                <span className="text-white text-sm">⭐</span>
              </div>
              <div>
                <p className="text-white font-medium">Membresía actualizada</p>
                <p className="text-gray-400 text-sm">Usuario promovido a Premium</p>
              </div>
            </div>
            <span className="text-gray-400 text-sm">Hace 1 hora</span>
          </div>
        </div>
      </div>
    </div>
  )
}
