import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { MainFooter } from './main/MainFooter'
import { TopNavBar } from './main/TopNavBar'

export function MainLayout() {
  return (
    <Layout className="main-shell">
      <TopNavBar />
      <Layout.Content className="main-content">
        <Outlet />
      </Layout.Content>
      <MainFooter />
    </Layout>
  )
}

