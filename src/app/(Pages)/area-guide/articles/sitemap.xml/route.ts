import { getArticlesData } from "@/hooks/getArticlesData";
import { CONFIG } from "../../../../../../site_config";

async function getSitemap() {
  const articles = await getArticlesData();

  const map = articles.map(article => ({
    url: `${CONFIG.BASE_URL}/area-guide/articles/${article.id}`,
    lastModified: article.date,
    changeFrequency: 'daily',
    priority: 1,
  }))
  
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
    ${map.map((item) => `
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