// pages/services/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Services() {
  const services = [
    { slug: 'containerization', title: 'Containerization & Orchestration' },
    { slug: 'cloud', title: 'Cloud Services Management' },
    { slug: 'devops', title: 'DevOps Consulting' },
    { slug: 'cicd', title: 'CI/CD Pipelines' },
    { slug: 'iac', title: 'Infrastructure as Code (IaC)' },
    { slug: 'monitoring', title: 'Monitoring & Logging' },
    { slug: 'security', title: 'Security & Compliance' },
    { slug: 'recovery', title: 'Disaster Recovery & Backup' },
    { slug: 'training', title: 'Training & Support' }
  ]

  return (
    <>
      <Head><title>Services — Satanaya</title></Head>
      <div className="container">
        <h1>Services</h1>
        <div className="grid">
          {services.map(s => (
            <div key={s.slug} className="card">
              <h3>{s.title}</h3>
              <Link href={`/services/${s.slug}`} className="link">Learn more →</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
