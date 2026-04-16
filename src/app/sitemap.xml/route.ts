import { getArticlesData } from "@/hooks/getArticlesData";
import { CONFIG } from "../../../site_config";

async function getSitemap() {
  const articles = await getArticlesData();
  const indexableArticles = articles.filter(a => a.ignore != true && a.unlisted != true);

  const staticURLs = [
    { path: "",                      changeFrequency: 'weekly',  priority: 1.0 },
    { path: "/scrapbooking-retreat", changeFrequency: 'monthly', priority: 0.9 },
    { path: "/outdoor-rec",          changeFrequency: 'monthly', priority: 0.9 },
    { path: "/cozy-ski-cabin",       changeFrequency: 'monthly', priority: 0.9 },
    { path: "/accommodations",       changeFrequency: 'monthly', priority: 0.9 },
    { path: "/gallery",              changeFrequency: 'monthly', priority: 0.7 },
    { path: "/area-guide",           changeFrequency: 'weekly',  priority: 0.8 },
  ].map(({ path, changeFrequency, priority }) => ({
    url: `${CONFIG.BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  const articleURLs = indexableArticles.map(article => ({
    url: `${CONFIG.BASE_URL}/area-guide/articles/${article.id}`,
    lastModified: article.date,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const allURLs = [...staticURLs, ...articleURLs];

  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
    ${allURLs.map((item) => `
      <url>
        <loc>${item.url.toLowerCase()}</loc>
        <lastmod>${item.lastModified.toISOString()}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
      </url>
    `).join('')}
    </urlset>
  `.trim();
}

export async function GET() {
  return new Response(await getSitemap(), {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
