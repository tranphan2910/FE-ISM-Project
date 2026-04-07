import { useParams } from 'react-router-dom'

export function HrCandidateDetailsPage() {
  const { id } = useParams()
  return <div>Hello world: HR candidate details page (id: {id})</div>
}

