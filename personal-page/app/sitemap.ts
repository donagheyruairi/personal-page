import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://donaghey.ie',
      lastModified: new Date('Wednesday 28 January, 21:59:27 UTC'),
      priority: 1,
    },
  ];
}
