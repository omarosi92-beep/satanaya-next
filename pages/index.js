// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Satanaya — Cloud & Container Solutions</title>
        <meta name="description" content="Satanaya: Kubernetes, cloud migrations, DevOps and managed cloud services across the Middle East." />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <img src="/satanaya-nobg-3.png" alt="Satanaya Logo" width={200} height={100} />
            <div className="brand-text">
              <div className="brand-name">Satanaya</div>
              <div className="brand-tag">NextGen Cloud & Container Solutions</div>
            </div>
          </div>

          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Build secure, highly-available Kubernetes & Cloud platforms</h1>
            <p className="lead">
              We design, deploy and operate production-ready containerized infrastructure (Kubernetes, K3s, OpenShift) and manage cloud platforms (AWS, Azure, GCP, Oracle).
            </p>
            <div className="cta">
              <a className="btn" href="mailto:hello@satanaya.com?subject=Website%20Inquiry">Get a free assessment</a>
              <Link href="/services" className="btn-outline">View services</Link>
            </div>
          </div>
        </section>

        <section className="container services-overview">
          <h2>Our Core Services</h2>

          <div className="grid">
            <div className="card featured">
              <h3>Containerization & Orchestration</h3>
              <p>Design & deploy highly available Kubernetes clusters (K8s, K3s, OpenShift) — cloud or on-prem. Storage, networking, security, CI/CD integration and runbooks.</p>
              <Link href="/services/containerization" className="link">Learn more →</Link>
            </div>

            <div className="card featured">
              <h3>Cloud Services Management</h3>
              <p>Cloud assessments, migration, optimization & managed operations for AWS, Azure, GCP and Oracle Cloud.</p>
              <Link href="/services/cloud" className="link">Learn more →</Link>
            </div>

            <div className="card">
              <h3>DevOps Consulting</h3>
              <p>Process & toolchain transformation to adopt DevOps and automation.</p>
              <Link href="/services/devops" className="link">Learn more →</Link>
            </div>

            <div className="card">
              <h3>CI/CD Pipelines</h3>
              <p>Automated pipelines with GitLab CI, GitHub Actions, Jenkins — safe releases every time.</p>
            </div>

            <div className="card">
              <h3>Infrastructure as Code (IaC)</h3>
              <p>Terraform, Ansible, CloudFormation — repeatable infrastructure provisioning.</p>
            </div>

            <div className="card">
              <h3>Monitoring & Observability</h3>
              <p>Prometheus, Grafana, Datadog — centralized metrics, logs and alerts.</p>
            </div>
          </div>
        </section>

        <section className="container case">
          <h2>Case Study — Saudi Government</h2>
          <div className="card">
            <p>Delivered a K3s environment for a government entity to run BMC software: HA cluster, Longhorn storage, monitoring, and operational runbooks.</p>
            <Link href="/case-studies" className="link">Read more →</Link>
          </div>
        </section>

        <section className="container about-teaser">
          <h2>About Satanaya</h2>
          <p>Based in Jordan, our certified team (CKA, CKAD, CKAS, Oracle OCP, Terraform) focuses on enterprise and government-grade cloud-native platforms across the GCC.</p>
          <Link href="/about" className="btn-outline">About us</Link>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div>© {new Date().getFullYear()} Satanaya — NextGen Cloud & Container Solutions</div>
          <div className="muted">Based in Jordan • Serving KSA, Qatar & the GCC</div>
        </div>
      </footer>
    </>
  )
}
