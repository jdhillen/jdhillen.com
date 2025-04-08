export default defineEventHandler((event) => {
  // Add cache headers for API responses
  if (event.path.startsWith('/api/')) {
    // Set cache headers
    setResponseHeaders(event, {
      'Cache-Control': 'public, max-age=300, s-maxage=600'
    });
  }
});