import { BankOutlined, EnvironmentOutlined, LeftOutlined } from '@ant-design/icons'
import { Breadcrumb, Button, Col, Flex, Image, Row, Typography, theme } from 'antd'
import { Link, useParams } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

export function CandidateJobDetailsPage() {
  const { token } = theme.useToken()
  const { id } = useParams()

  return (
    <div className="candidate-jobDetails">
      <header className="candidate-jobHeader">
        <Flex vertical gap={16}>
          <Flex justify="space-between" align="flex-end" wrap gap={16}>
            <div>
              <Breadcrumb
                className="candidate-breadcrumb"
                separator={<span className="candidate-breadcrumbSep">›</span>}
                items={[
                  { title: <Link to="/candidate/jobs">Jobs</Link> },
                  { title: <span className="candidate-breadcrumbLink">Vertex Systems</span> },
                  { title: <span className="candidate-breadcrumbActive">Senior Product Designer</span> },
                ]}
              />

              <Title className="candidate-jobH1" level={1} style={{ marginTop: 8, marginBottom: 10 }}>
                Senior Product Designer
              </Title>

              <Flex wrap gap={18} align="center">
                <Flex gap={8} align="center">
                  <BankOutlined style={{ fontSize: 16, color: token.colorTextSecondary }} />
                  <Text style={{ fontWeight: 700, color: token.colorText }}>Vertex Systems</Text>
                </Flex>
                <Flex gap={8} align="center">
                  <EnvironmentOutlined style={{ fontSize: 16, color: token.colorTextSecondary }} />
                  <Text style={{ color: token.colorTextSecondary }}>London, UK</Text>
                </Flex>
                <Flex gap={8} align="center">
                  <span className="candidate-moneyIcon" />
                  <Text className="candidate-jobPay">$120k - $160k</Text>
                </Flex>
              </Flex>

              <Text style={{ display: 'block', marginTop: 10, color: token.colorTextTertiary }}>Job ID: {id}</Text>
            </div>

            <Flex gap={10} wrap>
              <Link to="/candidate/jobs">
                <Button icon={<LeftOutlined />}>Back</Button>
              </Link>
              <Button type="primary" className="candidate-applyNowBtn">
                Apply Now
              </Button>
            </Flex>
          </Flex>

          <Flex wrap gap={8} className="candidate-jobPills">
            {['Remote Friendly', 'High Growth', 'Figma', 'Enterprise AI', 'Full-time'].map((t) => (
              <span key={t} className="candidate-pill">
                {t}
              </span>
            ))}
          </Flex>
        </Flex>
      </header>

      <Row gutter={[48, 48]}>
        <Col xs={24} lg={16}>
          <div className="candidate-heroCard">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACWvZjY1IECpGTTK9pcOtD5BJM7oN-vnLahcnr1uUCCF_V_5zsnMlWR479sptIg616lSB5rL08JCwYvCuCi5EHUJHFjAAAk1BfLwVBpWBmrd6mjiJj_euCPiVotuhedjStX6zGodJgDZLpE_1v6gNbDMZiCSvscDnCVzXVyRey0cl4V1OhDLj7oDZ1GveoLN_7vtVfBMyrKo4yfjlLH67WAvl3lzPYR-kxXloIp3_2B-D0s3Uf0405GMCPJqLfEXNj6PF58OlN-g"
              alt="Designer Workspace"
              preview={false}
              width="100%"
              height="100%"
              style={{ objectFit: 'cover' }}
            />
            <div className="candidate-heroOverlay" />
          </div>

          <section style={{ marginTop: 40 }}>
            <Title level={3} style={{ marginTop: 0, marginBottom: 16 }}>
              About the Role
            </Title>
            <div className="candidate-prose">
              <Paragraph style={{ marginTop: 0, color: token.colorTextSecondary }}>
                Vertex Systems is seeking a visionary Senior Product Designer to spearhead the evolution of our core
                enterprise analytics platform. You will be responsible for transforming complex data flows into elegant,
                intuitive experiences that empower our global clients to make better business decisions.
              </Paragraph>
              <Paragraph style={{ color: token.colorTextSecondary, marginBottom: 0 }}>
                As a lead voice in our design team, you'll work closely with engineering and product management to define
                the visual language and user architecture of next-generation AI-driven tools. This isn't just about
                moving pixels; it's about building the infrastructure for the future of work.
              </Paragraph>
            </div>
          </section>
        </Col>

        <Col xs={24} lg={8}>
          <aside style={{ minHeight: 1 }} />
        </Col>
      </Row>

      <footer className="candidate-detailFooter">
        <div className="candidate-detailFooterInner">
          <div>
            <Text className="candidate-detailFooterBrand">Editorial Enterprise Recruitment</Text>
            <div style={{ height: 6 }} />
            <Text className="candidate-detailFooterCopy">© 2024 Editorial Enterprise Recruitment. All rights reserved.</Text>
          </div>

          <Flex wrap gap={18} justify="center" className="candidate-detailFooterLinks">
            {['Terms of Service', 'Privacy Policy', 'Help Center', 'API Documentation'].map((t) => (
              <a key={t} href="#" className="candidate-detailFooterLink">
                {t}
              </a>
            ))}
          </Flex>
        </div>
      </footer>
    </div>
  )
}

