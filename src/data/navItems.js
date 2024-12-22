export const navItems = [
  { path: '/dashboard', icon: '📊', text: 'Dashboard' },
  { path: '/analytics', icon: '📈', text: 'Analytics' },
  { path: '/transactions', icon: '💹', text: 'Transactions' },
  { path: '/users', icon: '👥', text: 'User Management' },
  { path: '/settings', icon: '⚙️', text: 'Settings' },
  {
    text: 'Finance',
    icon: '💰',
    children: [
      { path: '/finance/revenue', text: 'Revenue' },
      { path: '/finance/revenue-due', text: 'Revenue Due' },
      { path: '/finance/invoices', text: 'Invoices' }
    ]
  }
]
