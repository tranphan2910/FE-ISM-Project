import { CheckCircleFilled } from '@ant-design/icons'
import { Button, Card, Col, Progress, Row, Space, Tag, Typography } from 'antd'

const talentPoints = [
  {
    title: 'Direct Line to Decision Makers',
    description:
      'Skip the black hole of ATS. We connect you directly with hiring architects and visionaries.',
  },
  {
    title: 'Salary Transparency First',
    description:
      'Every listing includes verified compensation ranges. No more guessing, only architectural precision.',
  },
  {
    title: 'Curated Professional Branding',
    description:
      'Our platform presents your portfolio with editorial style, highlighting your structural impact.',
  },
]

const employerChecks = [
  'AI-Assisted Structural Matching',
  'Editorial Screening & Verification',
  'Custom Hiring Workflows',
]

export function TalentEmployersSection() {
  return (
    <section className="main-section main-talent">
      <div className="main-container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <Typography.Title level={2} className="main-h2">
              For Talent
            </Typography.Title>

            <Space orientation="vertical" size={22} style={{ width: '100%' }}>
              {talentPoints.map((p) => (
                <div key={p.title} className="main-point">
                  <div className="main-pointDot" aria-hidden />
                  <div>
                    <Typography.Title level={4} style={{ marginTop: 0 }}>
                      {p.title}
                    </Typography.Title>
                    <Typography.Paragraph className="main-muted" style={{ marginBottom: 0 }}>
                      {p.description}
                    </Typography.Paragraph>
                  </div>
                </div>
              ))}
            </Space>

            <Button type="link" className="main-linkBtn" style={{ marginTop: 18, paddingLeft: 0 }}>
              Build Your Profile
            </Button>
          </Col>

          <Col xs={24} lg={12}>
            <Card className="main-card main-employers" variant="borderless">
              <Typography.Title level={3} style={{ marginTop: 0 }}>
                For Employers
              </Typography.Title>
              <Typography.Paragraph className="main-muted">
                Access a global network of high-precision talent built through years of editorial
                curation.
              </Typography.Paragraph>

              <Card className="main-card main-employerHud" variant="borderless">
                <Row justify="space-between" align="middle" style={{ marginBottom: 12 }}>
                  <Typography.Text className="main-miniCaps">Active Talent Pool</Typography.Text>
                  <Tag color="blue">Live</Tag>
                </Row>

                <Progress percent={72} showInfo={false} />

                <Row justify="space-between" align="bottom" style={{ marginTop: 14 }}>
                  <div>
                    <Typography.Title level={3} style={{ margin: 0 }}>
                      8,421
                    </Typography.Title>
                    <Typography.Text className="main-miniCaps">Qualified Leads</Typography.Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Typography.Title level={3} style={{ margin: 0 }} type="secondary">
                      42%
                    </Typography.Title>
                    <Typography.Text className="main-miniCaps">Growth WoW</Typography.Text>
                  </div>
                </Row>
              </Card>

              <Space className="main-checkList" orientation="vertical" size={10} style={{ width: '100%' }}>
                {employerChecks.map((item) => (
                  <div key={item} className="main-checkRow">
                    <Space>
                      <CheckCircleFilled style={{ color: '#1677ff' }} />
                      <Typography.Text type="secondary">{item}</Typography.Text>
                    </Space>
                  </div>
                ))}
              </Space>

              <Button type="primary" size="large" block>
                Access Employer Portal
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

