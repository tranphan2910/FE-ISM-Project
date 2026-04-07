import { useParams } from 'react-router-dom'

export function HrJobDetailsPage() {
  const { id } = useParams()
  return <div>Hello world: HR job details page (id: {id})</div>
}

