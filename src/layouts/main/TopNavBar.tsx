import { Button, Layout, Menu, Space, Typography } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { appEnv } from '@/config/env'

type NavItem = { key: string; label: string; to: string }

const navItems: NavItem[] = [
  { key: 'jobs', label: 'Find Jobs', to: '/main/jobs' },
  { key: 'categories', label: 'Categories', to: '/' },
  { key: 'employers', label: 'For Employers', to: '/' },
  { key: 'pricing', label: 'Pricing', to: '/' },
]

export function TopNavBar() {
  const location = useLocation()
  const selectedKey =
    navItems.find((i) => location.pathname.startsWith(i.to) && i.to !== '/')?.key ?? undefined

  return (
    <Layout.Header className="main-header">
      <div className="main-headerInner">
        <Link to="/" className="main-brand">
          <Typography.Text className="main-brandText">{appEnv.appName}</Typography.Text>
        </Link>

        <div className="main-nav">
          <Menu
            mode="horizontal"
            selectedKeys={selectedKey ? [selectedKey] : []}
            items={navItems.map((i) => ({
              key: i.key,
              label: (
                <Link to={i.to} className="main-navLink">
                  {i.label}
                </Link>
              ),
            }))}
          />
        </div>

        <Space size={12}>
          <Button type="text">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button type="primary">
            <Link to="/main/jobs">Post a Job</Link>
          </Button>
        </Space>
      </div>
    </Layout.Header>
  )
}

