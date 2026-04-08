import { Button, Drawer, Layout, Menu, Space, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { useMemo, useState } from 'react'
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
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const selectedKey =
    navItems.find((i) => location.pathname.startsWith(i.to) && i.to !== '/')?.key ?? undefined

  const menuItems = useMemo(
    () =>
      navItems.map((i) => ({
        key: i.key,
        label: (
          <Link to={i.to} className="main-navLink" onClick={() => setMobileOpen(false)}>
            {i.label}
          </Link>
        ),
      })),
    [],
  )

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
            items={menuItems}
          />
        </div>

        <Space size={12} className="main-actionsDesktop">
          <Button type="text">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button type="primary">
            <Link to="/main/jobs">Post a Job</Link>
          </Button>
        </Space>

        <Space size={8} className="main-actionsMobile">
          <Button type="primary">
            <Link to="/main/jobs" onClick={() => setMobileOpen(false)}>
              Post a Job
            </Link>
          </Button>
          <Button
            aria-label="Open menu"
            icon={<MenuOutlined />}
            onClick={() => setMobileOpen(true)}
          />
        </Space>
      </div>

      <Drawer
        title={appEnv.appName}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        placement="right"
        size="default"
      >
        <Menu mode="inline" selectedKeys={selectedKey ? [selectedKey] : []} items={menuItems} />
        <div style={{ marginTop: 16 }}>
          <Button block type="default" onClick={() => setMobileOpen(false)}>
            <Link to="/login">Sign In</Link>
          </Button>
        </div>
      </Drawer>
    </Layout.Header>
  )
}

