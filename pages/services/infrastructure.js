export default function InfrastructurePage() {
  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Infrastructure as Code (IaC)</h1>
      <p>
        We use Terraform, Ansible, and CloudFormation to automate and version-control your infrastructure.
      </p>
      <ul>
        <li>Provisioning scalable environments</li>
        <li>Automated infrastructure updates</li>
        <li>Consistent & reproducible deployments</li>
      </ul>
    </main>
  );
}
