// pages/services/containerization.js
import Head from 'next/head'
import Link from 'next/link'

export default function Containerization() {
  return (
    <>
      <Head>
        <title>Containerization & Orchestration — Satanaya</title>
        <meta name="description" content="Design and deploy production-ready Kubernetes (K8s, K3s, OpenShift) clusters on cloud or on-prem with Longhorn and robust HA." />
      </Head>

      <div className="container">
        <nav className="breadcrumbs"><Link href="/">Home</Link> › <Link href="/services">Services</Link> › Containerization</nav>

        <h1>Containerization & Orchestration</h1>

        <p><strong>What we deliver</strong></p>
        <ul>
          <li>Full cluster design: HA control plane, worker nodes, networking (Calico/Cilium), ingress.</li>
          <li>Storage: Longhorn and other block/persistent storage configuration for stateful apps.</li>
          <li>Security: RBAC, network policies, image scanning and admission controllers.</li>
          <li>Observability: Prometheus + Grafana, centralized logging, alerts.</li>
          <li>CI/CD integration and automated rollouts (canary/blue-green).</li>
        </ul>

        <p><strong>Options</strong></p>
        <ul>
          <li>On-prem Kubernetes (K3s, K8s distribution) with Longhorn</li>
          <li>Managed Kubernetes (EKS/AKS/GKE/OpenShift)</li>
          <li>Hybrid or multi-cloud cluster architecture</li>
          <li>Full handover & training + runbooks</li>
        </ul>

        <p className="cta-row">
          <a className="btn" href="mailto:hello@satanaya.com?subject=Containerization%20Inquiry">Request a PoC / Assessment</a>
          <Link href="/services" className="btn-outline">Back to Services</Link>
        </p>
      </div>
    </>
  )
}
