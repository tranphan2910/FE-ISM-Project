import { Col, Layout, Row, Space, Typography } from 'antd'
import { appEnv } from '@/config/env'

export function MainFooter() {
  return (
    <Layout.Footer className="main-footer">
      <div className="main-container">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <Typography.Title level={4} style={{ marginTop: 0, marginBottom: 8 }}>
              {appEnv.appName}
            </Typography.Title>
            <Typography.Paragraph className="main-footerText">
              The high-end platform for professional architects of the digital future. Precision
              hiring meets editorial authority.
            </Typography.Paragraph>
          </Col>

          <Col xs={24} md={12} style={{ textAlign: 'right' }}>
            <Space size={18} wrap>
              <Typography.Link className="main-footerLink">Privacy Policy</Typography.Link>
              <Typography.Link className="main-footerLink">Terms of Service</Typography.Link>
              <Typography.Link className="main-footerLink">Cookie Settings</Typography.Link>
              <Typography.Link className="main-footerLink">Contact Support</Typography.Link>
            </Space>
            <div style={{ marginTop: 16 }}>
              <Typography.Text className="main-footerCopyright">
                © 2024 {appEnv.appName}. Designed for the Digital Architect.
              </Typography.Text>
            </div>
          </Col>
        </Row>
      </div>
    </Layout.Footer>
  )
}

