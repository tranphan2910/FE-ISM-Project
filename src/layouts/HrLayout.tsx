import { Link, Outlet } from 'react-router-dom'

export function HrLayout() {
  return (
    <div style={{ padding: 24 }}>
      <header style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <strong>HR Layout</strong>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/hr/dashboard">Dashboard</Link>
          <Link to="/hr/jobs">Jobs</Link>
          <Link to="/hr/job/1">Job #1</Link>
          <Link to="/hr/candidates">Candidates</Link>
          <Link to="/hr/candidate/1">Candidate #1</Link>
          <Link to="/main">Main</Link>
          <Link to="/login">Auth</Link>
        </nav>
      </header>

      <main style={{ marginTop: 24 }}>
        <Outlet />
      </main>
    </div>
  )
}

