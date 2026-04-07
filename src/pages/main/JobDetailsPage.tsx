import { useParams } from 'react-router-dom'

export function JobDetailsPage() {
  const { id } = useParams()
  return <div>Hello world: Job details page (id: {id})</div>
}

