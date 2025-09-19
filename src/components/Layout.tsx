import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import { Clock, LayoutDashboard, ChartBar, LogOut, Users, Menu, X, User } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useState } from 'react'

export default function Layout() {
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const navigation = [
    { name: '대시보드', href: '/dashboard', icon: LayoutDashboard, show: true },
    { name: '시간 기록', href: '/time-tracking', icon: Clock, show: true },
    { name: '관리자', href: '/admin', icon: Users, show: user?.role === 'admin' },
    { name: '리포트', href: '/reports', icon: ChartBar, show: true },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 bg-gradient-to-b from-indigo-700 to-indigo-900">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <Clock className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-semibold text-white">TimeTracker</span>
            </div>
            <nav className="mt-8 flex-1 space-y-1 px-2">
              {navigation.filter(item => item.show).map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-600'
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
            <div className="flex-shrink-0 group block">
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-600">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{user?.name}</p>
                  <p className="text-xs font-medium text-indigo-300">{user?.department}</p>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="ml-auto flex-shrink-0 text-indigo-300 hover:text-white"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-indigo-700 z-10 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-white" />
            <span className="ml-2 text-lg font-semibold text-white">TimeTracker</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-20 bg-indigo-800 pt-16">
          <nav className="px-4 py-2 space-y-1">
            {navigation.filter(item => item.show).map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'bg-indigo-900 text-white' : 'text-indigo-100'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-3 py-2 text-base font-medium text-indigo-100 rounded-md hover:bg-indigo-700"
            >
              <LogOut className="mr-3 h-5 w-5" />
              로그아웃
            </button>
          </nav>
          <div className="absolute bottom-4 left-4 right-4 p-4 bg-indigo-700 rounded-lg">
            <p className="text-white font-medium">{user?.name}</p>
            <p className="text-indigo-300 text-sm">{user?.department} · {user?.position}</p>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1 pt-16 md:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}