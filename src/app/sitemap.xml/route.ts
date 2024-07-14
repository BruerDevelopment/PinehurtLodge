import { getArticlesData } from "@/hooks/getArticlesData";
import { CONFIG } from "../../../site_config";

async function getSitemap() {
  const articles = await getArticlesData();
  const paths = [
    "/scrapbooking-retreat",
    "/outdoor-rec",
    "/cozy-ski-cabin",
    "/accommodations",
    "/gallery",
    "/area-guide",
    "/area-guide/articles/sitemap.xml"
  ]
  const map = [
    {
      url: `${CONFIG.BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...paths.map(_path =>({
      url: `${CONFIG.BASE_URL}${_path}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    })),
    {
      url: `${CONFIG.BASE_URL}/area-guide/articles/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    }
  ]
  
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