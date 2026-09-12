import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEO({ title, description, path = '' }: SEOProps) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', `https://guericke.at${path}`, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:card', 'summary');

    const canonical = document.querySelector("link[rel='canonical']");
    if (canonical) {
      canonical.setAttribute('href', `https://guericke.at${path}`);
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = `https://guericke.at${path}`;
      document.head.appendChild(link);
    }
  }, [title, description, path]);

  return null;
}

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
