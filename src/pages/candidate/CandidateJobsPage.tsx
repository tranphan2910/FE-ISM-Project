import { Button, Flex, Image, Pagination, Typography, theme } from 'antd'
import { Link } from 'react-router-dom'

const { Title, Text } = Typography

type Job = {
  id: string
  title: string
  company: string
  location: string
  salary: string
  tags: string[]
  logoUrl: string
}

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Product Designer',
    company: 'Vertex Systems',
    location: 'London, UK',
    salary: '$120k - $160k',
    tags: ['Remote Friendly', 'High Growth', 'Figma'],
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGmZZ-jZ73fBGrmYP34G-70sjtT70vgSrH8-bpm_UWPJMpZ45IoDXsLL58-QF_3Ivz4gFyPjnEhaY3hAAV3S4LZIQUD2bv-bCWfukfsv8uza14HRG-lL02NrgIZuOQZP1yZqtNeJKB6Lfhnu8J2rB4CIjmtPLW6xUcNjjV7YS0vABE6m6knZ1Bw4mHjD3hXwyUs-nINn-aNZo5f2R9dMstn4QOl3GeTrFChtuH9YsH2K1JYRiQP97-00R_fW8Q530Zdfm-_W_7ag',
  },
  {
    id: '2',
    title: 'Editorial Lead Architect',
    company: 'The Narrative Studio',
    location: 'Remote / NYC',
    salary: '$145k - $190k',
    tags: ['Lead Role', 'Sustainability', 'CAD Expert'],
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8jAGISuuUpAZbTOJmMExXXZRJuJ_2fns0KJ75mvEqG7DtRafs3JHssFRRY8VylwVk0WldrdYzhA_Clu9aeLr1pK8Vp5l8rjYwOf79uPqf9GTIr57QDSQrEwOtV_IOtF6y8hO8NMoDW2VwsstRkJdwPSSSdYj27p_1FCwfJ7-wTxSK-0011-nVKoD0UQRRs-5NX8eGwNnUdsEuIjI0GHPgWYEPTojdB6MGP5AH5g0n8aFEX1Dh3cjbTNk4NEqMPPiwiPD_mL8L8Q',
  },
  {
    id: '3',
    title: 'Frontend Architecture Lead',
    company: 'Lumina Dev',
    location: 'Berlin, DE',
    salary: '$95k - $130k',
    tags: ['Tech Stack', 'React', 'TypeScript', 'Bcorp'],
    logoUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0EEjUM2OzLUdFxzkCsL6mzk8PhMni6Q3Cc27psODDPvIxhdWAW1dkE80fCqcUCRvZIKlbN3PoI_99MqbgA2lgoY7vYRa_g92pTLBH6CwoGC3ecabYcqtgOHhBKE7N73-0FDeHfmSWRaLgU35XZd150Q11DuOrF7FbP7LQapJlXmHK7qXYvWk_sLMRXW4plpp4dE4HXAJH9x5U8boMoKhyfap7w0vIPn6nMZojk5oK2GqMhd1TmAdpGiCH89Ob14hTxsWTbTNsww',
  },
]

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
          {mockJobs.map((job) => (
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

