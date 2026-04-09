export const metadata = {
  title: "OpenClaw 企业引入风险评估 - OpenClaw101",
  description:
    "28 道专业评估题，5 分钟量化企业在安全、数据、运维、合规等维度的准备程度，判断是否适合引入 OpenClaw AI 助手框架。",
  alternates: { canonical: "https://openclaw101.club/assessment/" },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://openclaw101.club/assessment/",
    siteName: "OpenClaw101",
    title: "OpenClaw 企业引入风险评估 - OpenClaw101",
    description:
      "28 道专业评估题，5 分钟量化企业在安全、数据、运维、合规等维度的准备程度，判断是否适合引入 OpenClaw AI 助手框架。",
    images: [
      {
        url: "https://openclaw101.club/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw 企业引入风险评估",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw 企业引入风险评估 - ClawDocs",
    description:
      "28 道专业评估题，5 分钟量化企业在安全、数据、运维、合规等维度的准备程度，判断是否适合引入 OpenClaw AI 助手框架。",
    images: ["https://clawdocs.cc/og-image.png"],
  },
};

export default function AssessmentLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Back to home nav */}
      {/* <nav style={{
        padding: '12px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
      }}>
        <a href="/" style={{
          fontWeight: 'bold',
          fontSize: '1.1em',
          textDecoration: 'none',
          color: 'inherit',
        }}>
          🦞 OpenClaw101
        </a>
        <span style={{ color: '#999' }}>|</span>
        <a href="/docs/getting-started/what-is-openclaw" style={{
          fontSize: '0.9em',
          textDecoration: 'none',
          color: '#666',
        }}>
          📖 教程
        </a>
      </nav> */}
      {children}
    </div>
  );
}
