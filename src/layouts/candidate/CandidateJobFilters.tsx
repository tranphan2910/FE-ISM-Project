import { Checkbox, Divider, Flex, InputNumber, Typography, theme } from 'antd'
import { useMemo, useState } from 'react'

const { Text, Title } = Typography

type JobTypeKey = 'fullTime' | 'contract' | 'remote'

export function CandidateJobFilters() {
  const { token } = theme.useToken()

  const [jobTypes, setJobTypes] = useState<Record<JobTypeKey, boolean>>({
    fullTime: true,
    contract: false,
    remote: false,
  })
  const [salaryMin, setSalaryMin] = useState<number | null>(null)
  const [salaryMax, setSalaryMax] = useState<number | null>(null)

  const items = useMemo(
    () =>
      [
        { key: 'fullTime' as const, label: 'Full-time' },
        { key: 'contract' as const, label: 'Contract' },
        { key: 'remote' as const, label: 'Remote' },
      ] satisfies Array<{ key: JobTypeKey; label: string }>,
    [],
  )

  return (
    <div className="candidate-filters" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <Title
          level={5}
          style={{
            margin: 0,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: token.colorTextTertiary,
          }}
        >
          Job Type
        </Title>
        <div style={{ height: 12 }} />

        <Flex vertical gap={10}>
          {items.map((it) => (
            <label key={it.key} className="candidate-filterRow">
              <Checkbox
                checked={jobTypes[it.key]}
                onChange={(e) => setJobTypes((p) => ({ ...p, [it.key]: e.target.checked }))}
              />
              <Text className="candidate-filterLabel" style={{ color: token.colorTextSecondary }}>
                {it.label}
              </Text>
            </label>
          ))}
        </Flex>
      </div>

      <Divider style={{ margin: 0, borderColor: token.colorBorderSecondary }} />

      <div>
        <Flex align="center" justify="space-between">
          <Title
            level={5}
            style={{
              margin: 0,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: token.colorTextTertiary,
            }}
          >
            Salary Range
          </Title>
          <Text style={{ fontSize: 10, fontWeight: 800, color: token.colorPrimary }}>VND</Text>
        </Flex>
        <div style={{ height: 12 }} />

        <Flex gap={8}>
          <InputNumber
            placeholder="Min"
            value={salaryMin}
            onChange={(v) => setSalaryMin(v ?? null)}
            style={{ width: '100%' }}
            min={0}
            controls={false}
          />
          <InputNumber
            placeholder="Max"
            value={salaryMax}
            onChange={(v) => setSalaryMax(v ?? null)}
            style={{ width: '100%' }}
            min={0}
            controls={false}
          />
        </Flex>
      </div>
    </div>
  )
}

