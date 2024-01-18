"use client"

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Home</h1>
      <Button variant="primary" onClick={() => router.push('/dashboard')}>Primary</Button>
    </div>
  )
}
