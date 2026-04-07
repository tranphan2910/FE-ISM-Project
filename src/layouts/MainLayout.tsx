import { Link, Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <strong>Main Layout</strong>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/main">Landing</Link>
          <Link to="/main/jobs">Jobs</Link>
          <Link to="/main/job/1">Job #1</Link>
          <Link to="/main/job/1/status">Job #1 Status</Link>
          <Link to="/login">Auth</Link>
          <Link to="/hr/dashboard">HR</Link>
        </nav>
      </header>

      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>
    </div>
  )
}

