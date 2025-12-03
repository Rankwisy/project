import React, { useEffect } from 'react';

export default function SEO({ 
  title, 
  description, 
  canonical,
  schema,
  keywords 
}) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Set meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // Set author meta tag
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
      metaAuthor = document.createElement('meta');
      metaAuthor.name = 'author';
      document.head.appendChild(metaAuthor);
    }
    metaAuthor.content = 'Chauffagiste Express Bruxelles';

    // Set viewport for responsive design
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.name = 'viewport';
      document.head.appendChild(metaViewport);
    }
    metaViewport.content = 'width=device-width, initial-scale=1.0';

    // Set Open Graph meta tags for social sharing
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'fr_BE' },
      { property: 'og:url', content: canonical || window.location.href },
      { property: 'og:site_name', content: 'Chauffagiste Express Bruxelles' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1581405459834-75c5f33acee2?w=1200&h=630&fit=crop' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Chauffagiste professionnel à Bruxelles - Installation et dépannage' }
    ];

    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1581405459834-75c5f33acee2?w=1200&h=630&fit=crop' }
    ];
    
    // WhatsApp specific meta tags (uses OG tags but also these)
    const whatsappTags = [
      { property: 'og:image:type', content: 'image/jpeg' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = tag.content;
    });

    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = tag.name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = tag.content;
    });

    whatsappTags.forEach(tag => {
      let whatsappTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!whatsappTag) {
        whatsappTag = document.createElement('meta');
        whatsappTag.setAttribute('property', tag.property);
        document.head.appendChild(whatsappTag);
      }
      whatsappTag.content = tag.content;
    });

    // Set robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }
    metaRobots.content = 'index, follow, max-image-preview:large';
    
    // Set canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.rel = 'canonical';
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = canonical;
    }
    
    // Add Schema.org structured data
    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
    
    // Cleanup on unmount
    return () => {
      if (scriptTag && !schema) {
        scriptTag.remove();
      }
    };
  }, [title, description, canonical, schema]);
  
  return null;
}