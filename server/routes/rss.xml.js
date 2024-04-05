// ==|== Imports ===================================================================================
import RSS from 'rss';
import { createClient } from '@supabase/supabase-js';

// // ==|== Supabase Client ==============================================================================
const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseKey = import.meta.env.SUPABASE_KEY;
const client = createClient(supabaseUrl, supabaseKey);

export default defineEventHandler(async (event) => {
  const siteUrl = 'https://jdhillen.com';

  // wrap everything in a try catch block
  try {
    // fetch data from database
    const { data:posts, error } = await client.from('blog').select('*').order('created_at', { ascending: false });

    // throw an error if the response is not ok
    if (error) {
      throw new Error(response?.status);
    }

    // create new rss feed this will be our channel tag with website title and url
    const feed = new RSS({
      title: 'J.D. Hillen | Blog',
      language: 'en',
      image_url: `${siteUrl}/apple-touch-icon.png`,
      site_url: siteUrl,     // link to your website/blog
      feed_url: `${siteUrl}/rss.xml`, // path to your rss feed
    });

    // loop over each posts
    for (const post of posts) {
      // add item tag to our rss feed with correct data
      feed.item({
        title: post.title, // title from post to item title
        url: `${siteUrl}/blog/${post.slug}`, // full path to where our article is hosted
        description: post.description, // dev.to APIs doesn't return a description, if you have one you can add it here
        date: post.created_at, // date post was created
      });
    }

    const feedString = feed.xml({ indent: true }); //This returns the XML as a string.

    event.node.res.setHeader('content-type', 'text/xml'); // we need to tell nitro to return this as a xml file
    event.node.res.end(feedString); // send the HTTP response
  } catch (e) {
    // return an error
    return e;
  }
});