/**
 * JSON-LD structured data component for SEO
 */

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ClawDocs",
    alternateName: "OpenClaw 中文教程",
    url: "https://clawdocs.cc",
    description:
      "ClawDocs 是一个全面的 OpenClaw 中文教程网站，帮助你从零开始掌握 OpenClaw AI 助手框架。",
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://clawdocs.cc/docs?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ClawDocs",
    url: "https://clawdocs.cc",
    logo: "https://clawdocs.cc/og-image.png",
    description: "ClawDocs 中文教程网站，提供从入门到精通的完整学习资源。",
    sameAs: ["https://github.com/seaoss/OpenClaw101.club"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `https://clawdocs.cc${item.url}` : undefined,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQPageJsonLd({ questions }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: `https://clawdocs.cc${url}`,
    datePublished: datePublished || "2025-01-01",
    dateModified: dateModified || new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "ClawDocs",
      url: "https://clawdocs.cc",
    },
    publisher: {
      "@type": "Organization",
      name: "ClawDocs",
      logo: {
        "@type": "ImageObject",
        url: "https://clawdocs.cc/og-image.png",
      },
    },
    inLanguage: "zh-CN",
    isPartOf: {
      "@type": "WebSite",
      name: "ClawDocs",
      url: "https://clawdocs.cc",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
