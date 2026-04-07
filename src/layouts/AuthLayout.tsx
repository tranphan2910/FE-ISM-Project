import { Link, Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <strong>Auth Layout</strong>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/main">Main</Link>
          <Link to="/hr/dashboard">HR</Link>
        </nav>
      </header>

      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>
    </div>
  )
}

