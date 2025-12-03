import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';

export default function SitemapXML() {
  const { data: posts = [] } = useQuery({
    queryKey: ['blogPostsSitemap'],
    queryFn: () => base44.entities.BlogPost.filter({ published: true }),
  });

  const { data: services = [] } = useQuery({
    queryKey: ['servicePagesSitemap'],
    queryFn: () => base44.entities.ServicePage.filter({ published: true }),
  });

  useEffect(() => {
    const pages = [
      { url: 'https://centrale-chauffagiste.be/', priority: '1.0', changefreq: 'daily' },
      { url: 'https://centrale-chauffagiste.be/a-propos', priority: '0.7', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/zones-intervention', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/blog', priority: '0.8', changefreq: 'daily' },
      { url: 'https://centrale-chauffagiste.be/contact', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/sitemap', priority: '0.5', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-ixelles', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-uccle', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-schaerbeek', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-anderlecht', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-etterbeek', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-woluwe', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-molenbeek', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-saint-gilles', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-jette', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-koekelberg', priority: '0.8', changefreq: 'monthly' },
      { url: 'https://centrale-chauffagiste.be/chauffagiste-bruxelles-ville', priority: '0.8', changefreq: 'monthly' },
    ];

    const servicePages = services.map(service => ({
      url: `https://centrale-chauffagiste.be/service/${service.slug}`,
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: new Date(service.updated_date || service.created_date).toISOString().split('T')[0]
    }));

    const blogPages = posts.map(post => ({
      url: `https://centrale-chauffagiste.be/blog/${post.slug}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: new Date(post.updated_date || post.created_date).toISOString().split('T')[0]
    }));

    const allPages = [...pages, ...servicePages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Create downloadable file
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
  }, [posts, services]);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0f1b2e] mb-6">Sitemap XML</h1>
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-4">
            Le sitemap XML a été généré avec succès. Il contient toutes les pages principales et articles de blog.
          </p>
          <div className="bg-white p-4 rounded border border-gray-300 overflow-x-auto">
            <pre className="text-sm text-gray-800">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://centrale-chauffagiste.be/</loc>
    <priority>1.0</priority>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://centrale-chauffagiste.be/installation-chaudiere</loc>
    <priority>0.9</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://centrale-chauffagiste.be/blog</loc>
    <priority>0.8</priority>
    <changefreq>daily</changefreq>
  </url>
  <!-- + ${services.length} pages de services + ${posts.length} articles de blog -->
</urlset>`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Pour soumettre ce sitemap à Google Search Console :
          </p>
          <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 mt-2">
            <li>Accédez à Google Search Console</li>
            <li>Sélectionnez votre propriété</li>
            <li>Allez dans "Sitemaps" dans le menu latéral</li>
            <li>Entrez l'URL de votre sitemap et cliquez sur "Envoyer"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}