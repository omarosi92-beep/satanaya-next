export default function CaseStudiesPage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Case Studies</h1>
      <p>
        Here are some examples of how Satanaya has helped businesses transform
        their infrastructure:
      </p>
      <section>
        <h2>📌 FinTech Startup</h2>
        <p>
          Migrated from legacy VMs to Kubernetes, reducing deployment times by
          70% and enabling auto-scaling during peak demand.
        </p>
      </section>
      <section>
        <h2>📌 Healthcare Provider</h2>
        <p>
          Implemented HIPAA-compliant infrastructure with monitoring and
          disaster recovery, ensuring 99.99% uptime.
        </p>
      </section>
      <section>
        <h2>📌 E-commerce Platform</h2>
        <p>
          Built CI/CD pipelines with automated testing and blue-green
          deployments, reducing release risk and downtime.
        </p>
      </section>
    </main>
  );
}
