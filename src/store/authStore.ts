import { create } from 'zustand'
import type { User } from '../types'

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (userData: Partial<User> & { password: string }) => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,

  login: async (email: string, _password: string) => {
    // Mock login - In real app, this would call an API
    const mockUser: User = {
      id: '1',
      email,
      name: email === 'admin@company.com' ? '관리자' : '직원',
      role: email === 'admin@company.com' ? 'admin' : 'employee',
      department: '개발팀',
      position: email === 'admin@company.com' ? '팀장' : '대리',
    }

    set({ isAuthenticated: true, user: mockUser })
    localStorage.setItem('user', JSON.stringify(mockUser))
  },

  logout: () => {
    set({ isAuthenticated: false, user: null })
    localStorage.removeItem('user')
  },

  signup: async (userData) => {
    // Mock signup - In real app, this would call an API
    const newUser: User = {
      id: Math.random().toString(36),
      email: userData.email!,
      name: userData.name!,
      role: 'employee',
      department: userData.department!,
      position: userData.position!,
    }

    set({ isAuthenticated: true, user: newUser })
    localStorage.setItem('user', JSON.stringify(newUser))
  },
}))

// Check localStorage on app load
const savedUser = localStorage.getItem('user')
if (savedUser) {
  useAuthStore.setState({
    isAuthenticated: true,
    user: JSON.parse(savedUser)
  })
}