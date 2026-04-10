import { Button, Flex, Image, Pagination, Typography, theme } from 'antd'
import { Link } from 'react-router-dom'

import { candidateJobs } from '@/data/candidateJobs'

const { Title, Text } = Typography

export function CandidateJobsPage() {
  const { token } = theme.useToken()

  return (
    <main className="candidate-jobsMain">
      <div className="candidate-jobsContainer">
        <header style={{ marginBottom: 56 }}>
          <Title level={2} style={{ marginTop: 0, marginBottom: 6, fontWeight: 900, letterSpacing: '-0.02em' }}>
            Architectural Engineering
          </Title>
          <Text style={{ color: token.colorTextSecondary, fontWeight: 600 }}>1,248 open positions in London, UK</Text>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {candidateJobs.map((job) => (
            <article key={job.id} className="candidate-jobCard">
              <Flex align="flex-start" justify="space-between" wrap gap={12}>
                <Flex gap={24} align="flex-start">
                  <div className="candidate-jobLogoBox">
                    <Image
                      className="candidate-jobLogo"
                      src={job.logoUrl}
                      alt={`${job.company} logo`}
                      preview={false}
                      width={28}
                      height={28}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  <div>
                    <Link to={`/candidate/job/${job.id}`} className="candidate-jobTitleLink">
                      <Text className="candidate-jobTitle">{job.title}</Text>
                    </Link>

                    <Flex className="candidate-jobMeta" align="center" wrap gap={10}>
                      <Text style={{ color: token.colorTextSecondary, fontWeight: 600 }}>{job.company}</Text>
                      <span className="candidate-dot" />
                      <Text style={{ color: token.colorTextSecondary, fontWeight: 600 }}>{job.location}</Text>
                      <span className="candidate-dot" />
                      <Text className="candidate-jobSalary">{job.salary}</Text>
                    </Flex>

                    <Flex wrap gap={8} style={{ marginTop: 12 }}>
                      {job.tags.map((t) => (
                        <span key={t} className="candidate-jobTag">
                          {t}
                        </span>
                      ))}
                    </Flex>
                  </div>
                </Flex>

                <Flex align="center" gap={12}>
                  <Button type="primary" className="candidate-applyBtn">
                    Apply
                  </Button>
                </Flex>
              </Flex>
            </article>
          ))}
        </div>

        <div className="candidate-paginationBar">
          <Text style={{ color: token.colorTextSecondary }}>Page 1 of 312</Text>
          <Pagination
            className="candidate-pagination"
            current={1}
            total={312 * 10}
            pageSize={10}
            showSizeChanger={false}
            showQuickJumper={false}
          />
        </div>
      </div>
    </main>
  )
}

