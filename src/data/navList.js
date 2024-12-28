import dashboard from '../assets/icons/dashboard.png'
import visitors from '../assets/icons/call.png'
import profile from '../assets/icons/profile.png'
import members from '../assets/icons/members.png'
import sales from '../assets/icons/sales.png'
import help from '../assets/icons/help.png'

export const navList = [
  {
    _id: 1,
    name: 'Dashboard',
    icon: dashboard,
    path: '/dashboard'
  },
  {
    _id: 2,
    name: 'Visitors',
    icon: visitors,
    path: '/visitors'
  },
  {
    _id: 3,
    name: 'Members',
    icon: members,
    path: '/members'
  },
  {
    _id: 4,
    name: 'Plans',
    icon: members,
    path: '/plans'
  },
  {
    _id: 5,
    name: 'Staff',
    icon: members,
    path: '/staff'
  },
  {
    _id: 6,
    name: 'Sales',
    icon: sales,
    path: '/sales/invoices'
  },
  {
    _id: 7,
    name: 'Analytics',
    icon: sales,
    path: '/sales'
  },
  {
    _id: 8,
    name: 'Reports',
    icon: sales,
    path: '/sales'
  },
  {
    _id: 9,
    name: 'Profile',
    icon: profile,
    path: '/profile'
  },
  {
    _id: 10,
    name: 'Help',
    icon: help,
    path: '/help'
  }
]
