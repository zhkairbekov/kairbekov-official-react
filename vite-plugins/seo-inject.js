import { seoConfig } from "../src/lib/seo.js";

function generateSeoTags() {
  const config = seoConfig;

  const tags = `
    <!-- SEO Meta Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="description" content="${config.description}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="author" content="${config.author}" />

    <!-- Verifications -->
    <meta name="google-site-verification" content="${config.verifications.google}" />
    <meta name="yandex-verification" content="${config.verifications.yandex}" />

    <!-- Open Graph -->
    <meta property="og:type" content="${config.ogTags.type}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.ogTags.ogDescription}" />
    <meta property="og:image" content="${config.imageUrl}" />
    <meta property="og:url" content="${config.siteUrl}/" />
    <meta property="og:site_name" content="${config.ogTags.siteName}" />

    <!-- Twitter -->
    <meta name="twitter:card" content="${config.twitterTags.card}" />
    <meta name="twitter:title" content="${config.title}" />
    <meta name="twitter:description" content="${config.twitterTags.twitterDescription}" />
    <meta name="twitter:image" content="${config.imageUrl}" />

    <!-- Canonical -->
    <link rel="canonical" href="${config.siteUrl}/" />

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "${config.author}",
      "jobTitle": "${config.schemaOrg.jobTitle}",
      "description": "${config.schemaOrg.schemaDescription}",
      "url": "${config.siteUrl}",
      "image": "${config.imageUrl}",
      "sameAs": [
        "${config.social.github}",
        "${config.social.instagram}",
        "${config.social.telegram}"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "${config.ogTags.siteName}",
        "url": "${config.siteUrl}"
      }
    }
    <\/script>
  `;

  return tags;
}

export default function seoInjectPlugin() {
  return {
    name: "seo-inject",
    transformIndexHtml(html) {
      const seoTags = generateSeoTags();
      return html.replace(/<\/title>/i, `</title>\n${seoTags}`);
    },
  };
}
