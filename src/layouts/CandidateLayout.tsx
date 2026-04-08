import { Layout, theme } from 'antd'
import type { CSSProperties } from 'react'
import { Outlet } from 'react-router-dom'

import { TopNavBar } from '@/layouts/main/TopNavBar'
import { CandidateJobFilters } from '@/layouts/candidate/CandidateJobFilters'

const HEADER_HEIGHT = 80
const SIDEBAR_WIDTH = 256

export function CandidateLayout() {
  const { token } = theme.useToken()

  const cssVars = {
    // Used by `candidate-layout.css` for hover/focus styling.
    ['--candidate-primary' as any]: token.colorPrimary,
    ['--candidate-text' as any]: token.colorText,
    ['--candidate-text-secondary' as any]: token.colorTextSecondary,
    ['--candidate-text-tertiary' as any]: token.colorTextTertiary,
    ['--candidate-border' as any]: token.colorBorderSecondary,
    ['--candidate-bg' as any]: token.colorBgContainer,
  } satisfies CSSProperties

  return (
    <Layout className="candidate-shell" style={cssVars}>
      <TopNavBar />

      <Layout.Sider
        width={SIDEBAR_WIDTH}
        theme="light"
        className="candidate-sider"
        style={{
          position: 'fixed',
          left: 0,
          top: HEADER_HEIGHT,
          bottom: 0,
          overflow: 'auto',
          background: token.colorBgContainer,
          borderRight: `1px solid ${token.colorBorderSecondary}`,
          padding: 24,
        }}
      >
        <CandidateJobFilters />
      </Layout.Sider>

      <Layout.Content
        className="candidate-content"
        style={{
          marginLeft: SIDEBAR_WIDTH,
          paddingTop: HEADER_HEIGHT,
          minHeight: '100vh',
          background: token.colorBgLayout,
        }}
      >
        <div style={{ padding: 24 }}>
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  )
}

