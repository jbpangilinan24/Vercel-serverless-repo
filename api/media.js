export default async function handler(req, res) {
  try {
    // Fetch categories from WordPress
    const response = await fetch(
      'https://www.ripgerber.com/wp-json/wp/v2/media/'
    );

    // Check if WordPress responded ok
    if (!response.ok) {
      throw new Error(`WP API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    res.status(200).json(data);
  } catch (error) {
    console.error('Error in categories function:', error.message);
    res.status(500).json({ error: error.message });
  }
}
