import {
  EnvironmentOutlined,
  FileTextOutlined,
  RightOutlined,
  StarFilled,
} from '@ant-design/icons'
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Flex,
  Image,
  Pagination,
  Row,
  Space,
  Tag,
  Typography,
  theme,
} from 'antd'
import type { CSSProperties } from 'react'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PIPELINE_BG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBmrWT5hOOytaPJF8g5Hg4lP0mNxMaL3NyyHm_hv6YAprmcgngacokNZqQIVIYY_piu4ZjkwwVDDV8uGqjwnrzLIx8BNspsgRMPu-RN7-Q09SLjvzMO5kChuj5XF4ScN2A1JXvWSopmh8wWdc9B-or1gCUTAwzaGkWv3W0VBPlU6xOxvysUw6yPp_K3c1_t-CdY-WCIt-IMm-YA05wboIJmzi5bH_jOMcKIMaLbwYMyrurRxKqSUOgRe4Oc0OOqsE2AGgWS4ygCew'

type PipelineFilter = 'all' | 'interviewing' | 'new'

type CandidateStatus = 'interviewing' | 'applied' | 'screening' | 'rejected'

type CandidateRow = {
  id: string
  name: string
  subtitle: string
  status: CandidateStatus
  appliedAt: string
  avatar?: string
  avatarAlt?: string
  initials?: string
  mutedActions?: boolean
}

const CANDIDATES: CandidateRow[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    subtitle: 'Lead Designer @ Stripe',
    status: 'interviewing',
    appliedAt: 'Oct 12, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC03UTvdJMO_C57eXFgnumvpwcygjFkxlHtZuRQJnMOGUjYZi2FshZiIGTwkK3pslHcKjColpNvT9NiGn673GV5CFYM0rPJpheFo1b64xXh9UXwKv3uNP6nwkhPgO-rrebHIRxtPhYAjRmgpcGSfc_FO_MzvD3uUoo30nHNvR5_vZqfmaY2khkGgqT7dswJQ8w9QMbyh2AkxouCc5owHtBXnzqED1ykbDog8M2_4foC_JreZyRFkPB-8zHhFFcytzoAm84N2hnSJQ',
    avatarAlt: 'Portrait of a creative professional woman with warm expression, wearing stylish glasses, soft studio lighting',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    subtitle: 'Senior UX at Meta',
    status: 'applied',
    appliedAt: 'Oct 14, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQsJ5GTCDa7hUPVnlcnJZzrZUw5timzbksPh2-oZXaMjdpVY-KyyensfM7oCgDxLKC9UtErxvBP5egc-Od9RW2Bbf6vGbbPqLvQC_m2HwH3F9T1LpSsXyyCmXazXAk0474jOHgir15pnS14V_NEr4UdT8yPqGWjlyEYzD-Kp_vNoFimuwbfghCDXN-Nw8LTqrzSPkDEwaJn7i1ZRLSy_ueSn240IkHUebrk9tu3XiLuWel7V3WAGwPTuqx6kLzFw2tUjiZnyo57A',
    avatarAlt: 'Close up portrait of a young man with a focused and professional demeanor, natural outdoor lighting',
  },
  {
    id: '3',
    name: 'Sarah Chen',
    subtitle: 'Independent Consultant',
    status: 'screening',
    appliedAt: 'Oct 15, 2023',
    initials: 'SC',
  },
  {
    id: '4',
    name: 'Julian Banks',
    subtitle: 'Product Lead @ Figma',
    status: 'rejected',
    appliedAt: 'Oct 10, 2023',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8JyXZ-V6RpqjdqGz7e6eMdhpv-OXM-pSdSwc3wk_JxPYCtQro0zbBj8mWb6weFBjfcRoEEBM2GV1CIzlfO_NNXZyPXIOYP6E3cGDuhv6e8qY_jEMaAWa3yNEEgYRaITRR3bxWmmmR3Bz7Lf9uO9IMgRMDq0_Ihp_MXBM3znLmY--cx3gObvBlm3v7l4e49IM0Gge0A8Do7RZ29blZjOlPcF9J_95YiD0IapT3AAQYD_7uFR6CPpRoVbF7UuULV9YTGERCWPnWcQ',
    avatarAlt: 'Middle-aged man with beard and friendly expression, professional business casual attire',
    mutedActions: true,
  },
]

const JOB_META: Record<string, { title: string; location: string }> = {
  '1': { title: 'Senior Creative Director', location: 'London, UK / Hybrid' },
  '2': { title: 'Principal Backend Engineer', location: 'Remote' },
  '3': { title: 'Head of Product Design', location: 'New York' },
}

const PIPELINE = { total: 128, applied: 42, interviewing: 18, offered: 3 }

function statusTag(
  status: CandidateStatus,
  token: ReturnType<typeof theme.useToken>['token'],
): { label: string; style: CSSProperties } {
  const base: CSSProperties = {
    margin: 0,
    borderRadius: 999,
    fontSize: 10,
    fontWeight: 800,
    letterSpacing: '0.08em',
    border: 'none',
    textTransform: 'uppercase',
  }
  switch (status) {
    case 'interviewing':
      return {
        label: 'Interviewing',
        style: { ...base, background: token.colorPrimaryBg, color: token.colorPrimary },
      }
    case 'applied':
      return {
        label: 'Applied',
        style: { ...base, background: token.colorSuccessBg, color: token.colorSuccess },
      }
    case 'screening':
      return {
        label: 'Screening',
        style: { ...base, background: token.colorFillSecondary, color: token.colorTextSecondary },
      }
    default:
      return {
        label: 'Rejected',
        style: { ...base, background: token.colorErrorBg, color: token.colorError },
      }
  }
}

function CandidateTableRow({ row, token }: { row: CandidateRow; token: ReturnType<typeof theme.useToken>['token'] }) {
  const [hovered, setHovered] = useState(false)
  const st = statusTag(row.status, token)

  const rowStyle: CSSProperties = {
    padding: `${token.paddingLG}px ${token.paddingLG * 1.5}px`,
    transition: `background ${token.motionDurationMid}`,
  }

  return (
    <Row
      gutter={[16, 16]}
      align="middle"
      style={rowStyle}
      onMouseEnter={(e) => {
        setHovered(true)
        e.currentTarget.style.background = `color-mix(in srgb, ${token.colorFillAlter} 45%, transparent)`
      }}
      onMouseLeave={(e) => {
        setHovered(false)
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <Col xs={24} lg={8}>
        <Flex align="center" gap={token.margin}>
          {row.avatar ? (
            <Avatar src={row.avatar} size={48} shape="square" style={{ borderRadius: token.borderRadiusLG }} alt={row.avatarAlt} />
          ) : (
            <Avatar
              size={48}
              shape="square"
              style={{
                borderRadius: token.borderRadiusLG,
                background: token.colorFillSecondary,
                color: token.colorPrimary,
                fontWeight: 700,
              }}
            >
              {row.initials}
            </Avatar>
          )}
          <div>
            <Typography.Text strong style={{ display: 'block', color: hovered ? token.colorPrimary : token.colorText, transition: `color ${token.motionDurationMid}` }}>
              {row.name}
            </Typography.Text>
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM }}>
              {row.subtitle}
            </Typography.Text>
          </div>
        </Flex>
      </Col>
      <Col xs={24} lg={5} style={{ textAlign: 'center' }}>
        <Tag style={st.style}>{st.label}</Tag>
      </Col>
      <Col xs={24} lg={4} style={{ textAlign: 'center' }}>
        <Typography.Text type="secondary" style={{ fontSize: token.fontSize }}>
          {row.appliedAt}
        </Typography.Text>
      </Col>
      <Col xs={24} lg={7}>
        <Flex
          justify="flex-end"
          gap={token.marginSM}
          wrap="wrap"
          style={{
            opacity: row.mutedActions && !hovered ? 0.5 : 1,
            transition: `opacity ${token.motionDurationMid}`,
          }}
        >
          <Button
            type="default"
            icon={<FileTextOutlined />}
            style={{
              borderRadius: token.borderRadiusLG,
              boxShadow: token.boxShadowTertiary,
              borderColor: `color-mix(in srgb, ${token.colorBorder} 55%, transparent)`,
            }}
            aria-label="Resume"
          />
          <Link to={`/hr/candidate/${row.id}`}>
            <Button
              type="default"
              style={{
                fontWeight: 700,
                fontSize: token.fontSizeSM,
                borderRadius: token.borderRadiusLG,
                boxShadow: token.boxShadowTertiary,
                borderColor: `color-mix(in srgb, ${token.colorBorder} 55%, transparent)`,
              }}
            >
              View Profile
            </Button>
          </Link>
        </Flex>
      </Col>
    </Row>
  )
}

export function HrJobDetailsPage() {
  const { id = '1' } = useParams()
  const { token } = theme.useToken()
  const [pipelineFilter, setPipelineFilter] = useState<PipelineFilter>('all')
  const [page, setPage] = useState(1)

  const job = JOB_META[id] ?? { title: 'Senior Product Designer', location: 'New York / Remote' }

  const filteredCandidates = useMemo(() => {
    if (pipelineFilter === 'all') return CANDIDATES
    if (pipelineFilter === 'interviewing') return CANDIDATES.filter((c) => c.status === 'interviewing')
    return CANDIDATES.filter((c) => c.status === 'applied' || c.status === 'screening')
  }, [pipelineFilter])

  const pageSize = 4
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredCandidates.slice(start, start + pageSize)
  }, [filteredCandidates, page])

  const pipelineCardStyle: CSSProperties = {
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG * 2,
    padding: token.paddingLG * 1.5,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 200,
  }

  const alertCardStyle: CSSProperties = {
    background: token.colorPrimary,
    color: token.colorTextLightSolid,
    borderRadius: token.borderRadiusLG * 2,
    padding: token.paddingLG * 1.5,
    position: 'relative',
    overflow: 'hidden',
    minHeight: 200,
  }

  const listCardStyle: CSSProperties = {
    borderRadius: token.borderRadiusLG * 2,
    overflow: 'hidden',
    boxShadow: '0 12px 40px rgba(0, 26, 67, 0.06)',
    background: token.colorBgContainer,
  }

  const listHeaderStyle: CSSProperties = {
    padding: `${token.paddingLG}px ${token.paddingLG * 1.5}px`,
    borderBottom: `1px solid color-mix(in srgb, ${token.colorBorderSecondary} 55%, transparent)`,
  }

  const tableHeadStyle: CSSProperties = {
    padding: `${token.padding}px ${token.paddingLG * 1.5}px`,
    background: token.colorFillAlter,
    color: token.colorTextSecondary,
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  }

  const filterBtn = (key: PipelineFilter, label: string) => {
    const active = pipelineFilter === key
    return (
      <Button
        type="text"
        size="small"
        onClick={() => {
          setPipelineFilter(key)
          setPage(1)
        }}
        style={{
          fontSize: token.fontSizeSM,
          fontWeight: 800,
          borderRadius: token.borderRadius,
          color: active ? token.colorPrimary : token.colorTextSecondary,
          background: active ? token.colorPrimaryBg : undefined,
        }}
      >
        {label}
      </Button>
    )
  }

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Flex vertical gap={token.marginXL * 1.25}>
        <Flex justify="space-between" align="flex-end" wrap="wrap" gap={token.marginLG}>
          <div>
            <Breadcrumb
              style={{ marginBottom: token.marginMD, fontSize: token.fontSizeSM, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}
              items={[
                {
                  title: (
                    <Link to="/hr/my-job" style={{ color: token.colorTextSecondary }}>
                      Jobs
                    </Link>
                  ),
                },
                {
                  title: <span style={{ color: token.colorPrimary }}>Candidates</span>,
                },
              ]}
              separator={<RightOutlined style={{ fontSize: 10, color: token.colorTextTertiary }} />}
            />
            <Typography.Title level={2} style={{ margin: 0, fontWeight: 800, letterSpacing: '-0.02em' }}>
              {job.title}
            </Typography.Title>
            <Flex gap={token.marginSM} wrap="wrap" style={{ marginTop: token.margin }}>
              <Tag
                style={{
                  margin: 0,
                  borderRadius: 999,
                  padding: `${token.paddingXXS + 2}px ${token.paddingSM}px`,
                  fontWeight: 600,
                  fontSize: token.fontSizeSM,
                  border: 'none',
                  background: token.colorFillTertiary,
                  color: token.colorTextSecondary,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: token.colorSuccess,
                    marginRight: token.marginXXS,
                  }}
                />
                Active Role
              </Tag>
              <Tag
                icon={<EnvironmentOutlined />}
                style={{
                  margin: 0,
                  borderRadius: 999,
                  padding: `${token.paddingXXS + 2}px ${token.paddingSM}px`,
                  fontWeight: 600,
                  fontSize: token.fontSizeSM,
                  border: 'none',
                  background: token.colorFillTertiary,
                  color: token.colorTextSecondary,
                }}
              >
                {job.location}
              </Tag>
            </Flex>
          </div>
          <Space wrap>
            <Button
              size="large"
              style={{
                fontWeight: 600,
                borderRadius: token.borderRadiusLG,
                boxShadow: token.boxShadowTertiary,
                borderColor: `color-mix(in srgb, ${token.colorBorder} 45%, transparent)`,
              }}
            >
              Export List
            </Button>
            <Button type="primary" size="large" style={{ fontWeight: 600, borderRadius: token.borderRadiusLG }}>
              Edit Job Detail
            </Button>
          </Space>
        </Flex>

        <Row gutter={[token.marginLG, token.marginLG]}>
          <Col xs={24} lg={16}>
            <div style={pipelineCardStyle}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <Typography.Text type="secondary" style={{ fontWeight: 500, fontSize: token.fontSize }}>
                  Total Pipeline
                </Typography.Text>
                <Typography.Title level={2} style={{ margin: `${token.marginXXS}px 0 0`, fontSize: 48, fontWeight: 800 }}>
                  {PIPELINE.total}
                </Typography.Title>
                <Flex gap={token.marginLG} wrap="wrap" style={{ marginTop: token.marginLG }}>
                  <div>
                    <Typography.Text
                      style={{
                        display: 'block',
                        fontSize: token.fontSizeSM,
                        fontWeight: 800,
                        color: token.colorTextSecondary,
                        marginBottom: token.marginXXS,
                      }}
                    >
                      APPLIED
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: token.fontSizeHeading3 }}>
                      {PIPELINE.applied}
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text
                      style={{
                        display: 'block',
                        fontSize: token.fontSizeSM,
                        fontWeight: 800,
                        color: token.colorTextSecondary,
                        marginBottom: token.marginXXS,
                      }}
                    >
                      INTERVIEWING
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: token.fontSizeHeading3, color: token.colorPrimary }}>
                      {PIPELINE.interviewing}
                    </Typography.Text>
                  </div>
                  <div>
                    <Typography.Text
                      style={{
                        display: 'block',
                        fontSize: token.fontSizeSM,
                        fontWeight: 800,
                        color: token.colorTextSecondary,
                        marginBottom: token.marginXXS,
                      }}
                    >
                      OFFERED
                    </Typography.Text>
                    <Typography.Text strong style={{ fontSize: token.fontSizeHeading3 }}>
                      {PIPELINE.offered}
                    </Typography.Text>
                  </div>
                </Flex>
              </div>
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  width: '50%',
                  height: '100%',
                  opacity: 0.1,
                  pointerEvents: 'none',
                }}
              >
                <Image src={PIPELINE_BG} alt="Abstract growth visualization" preview={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </Col>
          <Col xs={24} lg={8}>
            <div style={alertCardStyle}>
              <Typography.Text style={{ color: `color-mix(in srgb, ${token.colorTextLightSolid} 88%, transparent)`, fontWeight: 500, fontSize: token.fontSizeSM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Top Talent Alert
              </Typography.Text>
              <Typography.Title level={4} style={{ color: token.colorTextLightSolid, margin: `${token.marginSM}px 0 ${token.margin}px`, fontWeight: 700, lineHeight: 1.35 }}>
                3 candidates match 95%+ of core requirements
              </Typography.Title>
              <Button
                style={{
                  marginTop: token.marginSM,
                  fontWeight: 700,
                  borderRadius: token.borderRadiusLG,
                  color: token.colorPrimary,
                  border: 'none',
                }}
              >
                View Recommended
              </Button>
              <StarFilled
                style={{
                  position: 'absolute',
                  right: -token.marginLG,
                  bottom: -token.marginLG,
                  fontSize: 120,
                  color: token.colorTextLightSolid,
                  opacity: 0.12,
                }}
              />
            </div>
          </Col>
        </Row>

        <div style={listCardStyle}>
          <Flex justify="space-between" align="center" wrap="wrap" gap={token.margin} style={listHeaderStyle}>
            <Typography.Title level={5} style={{ margin: 0, fontWeight: 700 }}>
              Active Pipeline
            </Typography.Title>
            <Space size={token.marginXS}>
              {filterBtn('all', 'ALL')}
              {filterBtn('interviewing', 'INTERVIEWING')}
              {filterBtn('new', 'NEW')}
            </Space>
          </Flex>

          <div>
            <Row gutter={[16, 0]} style={tableHeadStyle}>
              <Col xs={0} lg={8}>
                Candidate
              </Col>
              <Col xs={0} lg={5} style={{ textAlign: 'center' }}>
                Status
              </Col>
              <Col xs={0} lg={4} style={{ textAlign: 'center' }}>
                Date Applied
              </Col>
              <Col xs={0} lg={7} style={{ textAlign: 'right' }}>
                Action
              </Col>
            </Row>

            {paged.map((row) => (
              <CandidateTableRow key={row.id} row={row} token={token} />
            ))}
          </div>

          <Flex
            justify="space-between"
            align="center"
            wrap="wrap"
            gap={token.margin}
            style={{
              padding: `${token.paddingLG}px ${token.paddingLG * 1.5}px`,
              background: `color-mix(in srgb, ${token.colorFillAlter} 50%, transparent)`,
            }}
          >
            <Typography.Text type="secondary" style={{ fontSize: token.fontSizeSM, fontWeight: 500 }}>
              Showing {paged.length === 0 ? 0 : (page - 1) * pageSize + 1}–{(page - 1) * pageSize + paged.length} of{' '}
              {PIPELINE.total} candidates
            </Typography.Text>
            <Pagination
              size="small"
              current={page}
              total={filteredCandidates.length}
              pageSize={pageSize}
              onChange={setPage}
              showSizeChanger={false}
            />
          </Flex>
        </div>
      </Flex>
    </div>
  )
}
