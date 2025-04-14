// ==|== Imports ===================================================================================
import { marked } from 'marked';
import RSS from 'rss';

import { getSupabaseClient } from '../utils/supabase';

export default defineEventHandler(async (event) => {
  const siteUrl = process.env.NUXT_PUBLIC_SITE_URL;
  const client = getSupabaseClient();

  try {
    const { data: posts, error } = await client
      .from('blog')
      .select('*')
      .eq('enabled', 'TRUE')
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    const feed = new RSS({
      title: 'J.D. Hillen | Blog',
      language: 'en',
      image_url: `${siteUrl}/apple-touch-icon.png`,
      site_url: siteUrl,
      feed_url: `${siteUrl}/rss.xml`
    });

    posts.forEach((post) => {
      // Convert markdown to HTML for RSS feed
      const htmlContent = post.body ? marked.parse(post.body) : '';

      feed.item({
        title: post.title,
        url: `${siteUrl}/blog/${post.slug}`,
        description: post.description,
        date: post.created_at,
        custom_elements: [{ 'content:encoded': htmlContent }]
      });
    });

    const feedString = feed.xml({ indent: true });

    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);
  } catch (e) {
    console.error('RSS generation error:', e);
    event.node.res.statusCode = 500;
    event.node.res.end('Error generating RSS feed');
  }
});
