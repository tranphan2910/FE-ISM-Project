import { Button, Card, Flex, List, Tag, Typography, theme } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

const mockJobs = [
  { id: '1', title: 'Frontend Engineer', company: 'ISM', type: 'Full-time', location: 'Ho Chi Minh', salary: '25–40M' },
  { id: '2', title: 'Backend Engineer', company: 'ISM', type: 'Contract', location: 'Remote', salary: '30–55M' },
  { id: '3', title: 'QA Engineer', company: 'Partner Co.', type: 'Remote', location: 'Remote', salary: '18–28M' },
]

export function CandidateJobsPage() {
  const { token } = theme.useToken()

  return (
    <div style={{ maxWidth: 980 }}>
      <Flex align="baseline" justify="space-between" wrap gap={12} style={{ marginBottom: 16 }}>
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Jobs
          </Title>
          <Text style={{ color: token.colorTextSecondary }}>Browse opportunities and open the details to apply.</Text>
        </div>
        <Button type="primary">Create alert</Button>
      </Flex>

      <Card
        style={{ borderColor: token.colorBorderSecondary }}
        styles={{ body: { padding: 0 } }}
      >
        <List
          dataSource={mockJobs}
          renderItem={(job) => (
            <List.Item
              style={{ padding: 16, borderBlockEnd: `1px solid ${token.colorBorderSecondary}` }}
              actions={[
                <Link key="view" to={`/candidate/job/${job.id}`}>
                  <Button type="primary">View</Button>
                </Link>,
              ]}
            >
              <List.Item.Meta
                title={
                  <Flex gap={10} align="center" wrap>
                    <Text style={{ fontWeight: 800, color: token.colorText }}>{job.title}</Text>
                    <Tag color="blue">{job.type}</Tag>
                  </Flex>
                }
                description={
                  <Flex gap={10} wrap>
                    <Text style={{ color: token.colorTextSecondary }}>{job.company}</Text>
                    <Text style={{ color: token.colorTextTertiary }}>•</Text>
                    <Text style={{ color: token.colorTextSecondary }}>{job.location}</Text>
                    <Text style={{ color: token.colorTextTertiary }}>•</Text>
                    <Text style={{ color: token.colorTextSecondary }}>{job.salary} VND</Text>
                  </Flex>
                }
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  )
}

