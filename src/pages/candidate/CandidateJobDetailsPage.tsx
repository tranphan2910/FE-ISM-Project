import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Flex, Space, Typography, theme } from 'antd'
import { Link, useParams } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

export function CandidateJobDetailsPage() {
  const { token } = theme.useToken()
  const { id } = useParams()

  return (
    <div style={{ maxWidth: 980 }}>
      <Space direction="vertical" size={12} style={{ width: '100%' }}>
        <Link to="/candidate/jobs">
          <Button icon={<ArrowLeftOutlined />}>Back to jobs</Button>
        </Link>

        <Card style={{ borderColor: token.colorBorderSecondary }}>
          <Flex align="flex-start" justify="space-between" wrap gap={12}>
            <div>
              <Title level={3} style={{ marginTop: 0, marginBottom: 6 }}>
                Frontend Engineer
              </Title>
              <Text style={{ color: token.colorTextSecondary }}>Job ID: {id}</Text>
            </div>
            <Button type="primary">Apply</Button>
          </Flex>

          <Divider style={{ borderColor: token.colorBorderSecondary }} />

          <Title level={5} style={{ marginTop: 0 }}>
            About the role
          </Title>
          <Paragraph style={{ color: token.colorTextSecondary, marginBottom: 0 }}>
            This is a placeholder job detail page. Next step is to connect real data and wire filters on the left sidebar
            to the jobs query.
          </Paragraph>
        </Card>
      </Space>
    </div>
  )
}

