/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://clawdocs.cc'),
  title: {
    default: 'OpenClaw101 - OpenClaw 中文教程',
    template: '%s - OpenClaw101'
  },
  description: 'OpenClaw101 是一个全面的 OpenClaw 中文教程网站，帮助你从零开始掌握 OpenClaw AI 助手框架。包含 25+ 篇教程，覆盖安装部署、多渠道接入、进阶配置和实战案例。',
  applicationName: 'OpenClaw101',
  generator: 'Next.js',
  appleWebApp: {
    title: 'OpenClaw101'
  },
  keywords: [
    'OpenClaw', 'AI助手', '教程', 'AI Agent', '个人助手', '自托管',
    'WhatsApp', 'Telegram', 'Discord', '飞书', '钉钉', 'QQ',
    'AI框架', '开源', '中文教程', 'Self-hosted AI'
  ],
  authors: [{ name: 'OpenClaw101' }],
  creator: 'OpenClaw101',
  publisher: 'OpenClaw101',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://clawdocs.cc',
    siteName: 'OpenClaw101',
    title: 'OpenClaw101 - OpenClaw 中文教程',
    description: '从零开始掌握 OpenClaw AI 助手框架。25+ 篇中文教程，覆盖安装部署、多渠道接入、进阶配置、实战案例。',
    images: [
      {
        url: 'https://clawdocs.cc/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OpenClaw101 - 从零开始掌握 OpenClaw AI 助手框架',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw101 - OpenClaw 中文教程',
    description: '从零开始掌握 OpenClaw AI 助手框架。25+ 篇中文教程，覆盖安装部署、多渠道接入、进阶配置、实战案例。',
    images: ['https://clawdocs.cc/og-image.png'],
  },
  alternates: {
    canonical: 'https://clawdocs.cc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "ca-pub-4168738332542023",
  },
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
          🦞 OpenClaw101
        </span>
      }
      projectLink="https://github.com/Tahitee/OpenClaw101.club"
    >
      <a
        href="/docs/cases/luxury-trade"
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#ea580c',
          textDecoration: 'none',
          padding: '4px 12px',
          borderRadius: '6px',
          border: '1.5px solid #ea580c',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        🔥 典型案例
      </a>
      <a
        href="/assessment/"
        style={{
          fontSize: '0.875rem',
          fontWeight: 600,
          color: '#dc2626',
          textDecoration: 'none',
          padding: '4px 12px',
          borderRadius: '6px',
          border: '1.5px solid #dc2626',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
          marginLeft: '8px',
        }}
      >
        📋 企业风险评估
      </a>
    </Navbar>
  )
  const pageMap = await getPageMap()
  return (
    <html lang="zh" dir="ltr" suppressHydrationWarning>
      <Head 
        faviconGlyph="🦞"

      />
      <body>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4168738332542023"
          crossOrigin="anonymous"
        ></script>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '12px' }}>
                  <a
                    href="/assessment/"
                    style={{
                      display: 'inline-block',
                      padding: '6px 16px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#dc2626',
                      textDecoration: 'none',
                      border: '1.5px solid #dc2626',
                      borderRadius: '6px',
                    }}
                  >
                    📋 企业引入风险评估 — 5 分钟测一测
                  </a>
                </div>
                © {new Date().getFullYear()} OpenClaw101. 基于{' '}
                <a href="https://nextra.site" target="_blank" rel="noopener noreferrer">
                  Nextra
                </a>{' '}
                构建。
              </div>
            </Footer>
          }
          editLink="在 GitHub 上编辑此页"
          docsRepositoryBase="https://github.com/Tahitee/OpenClaw101.club/blob/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
