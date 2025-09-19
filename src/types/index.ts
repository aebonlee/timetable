export interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'employee'
  department: string
  position: string
  avatar?: string
}

export interface TimeEntry {
  id: string
  userId: string
  date: string
  startTime: string
  endTime: string
  category: TaskCategory
  description: string
  project?: string
  status: 'pending' | 'approved' | 'rejected'
}

export interface TaskCategory {
  id: string
  name: string
  color: string
  icon: string
}

export interface Project {
  id: string
  name: string
  description: string
  startDate: string
  endDate: string
  members: string[]
  status: 'active' | 'completed' | 'on-hold'
  progress: number
}

export interface Department {
  id: string
  name: string
  managerId: string
  members: string[]
}

export interface DashboardStats {
  totalHours: number
  completedTasks: number
  pendingApprovals: number
  productivity: number
}